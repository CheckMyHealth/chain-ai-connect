
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }
  
  try {
    // Get the JWT token from the request
    const authHeader = req.headers.get('authorization');
    if (!authHeader) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      { auth: { persistSession: false } }
    );
    
    // Parse request body
    const { projectId } = await req.json();
    if (!projectId) {
      return new Response(JSON.stringify({ error: 'Project ID is required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    console.log(`Processing project: ${projectId}`);
    
    // Get the project details
    const { data: project, error: projectError } = await supabaseClient
      .from('projects')
      .select('*')
      .eq('id', projectId)
      .single();
    
    if (projectError || !project) {
      console.error('Error fetching project:', projectError);
      return new Response(JSON.stringify({ error: 'Project not found' }), {
        status: 404,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    
    // Get all profiles that might be a good match
    const { data: profiles, error: profilesError } = await supabaseClient
      .from('profiles')
      .select('*')
      .neq('id', project.user_id);
    
    if (profilesError) {
      console.error('Error fetching profiles:', profilesError);
      return new Response(JSON.stringify({ error: 'Failed to fetch profiles' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
    
    const matches = [];
    
    // Analyze each profile for compatibility
    for (const profile of profiles) {
      const matchScore = calculateMatchScore(project, profile);
      
      if (matchScore > 30) {  // Only create matches for scores above a threshold
        matches.push({
          project_id: projectId,
          user_id: profile.id,
          match_score: matchScore,
          status: 'pending',
        });
      }
    }
    
    console.log(`Found ${matches.length} potential matches`);
    
    // Insert matches into the database
    if (matches.length > 0) {
      const { error: matchError } = await supabaseClient
        .from('matches')
        .upsert(matches, { onConflict: 'project_id,user_id', ignoreDuplicates: false });
      
      if (matchError) {
        console.error('Error creating matches:', matchError);
        return new Response(JSON.stringify({ error: 'Failed to create matches' }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
    }
    
    // Update project status to 'analyzed'
    const { error: updateError } = await supabaseClient
      .from('projects')
      .update({ status: 'analyzed' })
      .eq('id', projectId);
    
    if (updateError) {
      console.error('Error updating project status:', updateError);
    }
    
    return new Response(JSON.stringify({ 
      success: true, 
      message: `Analysis complete. Found ${matches.length} potential matches.` 
    }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in analyze-project function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

// Calculate match score between project and profile
function calculateMatchScore(project, profile) {
  let score = 50; // Base score
  
  // Check blockchain preference match
  if (profile.blockchain_preference && profile.blockchain_preference.includes(project.blockchain)) {
    score += 20;
  }
  
  // Check partnership interests match
  if (profile.partnership_interests && project.partnership_type) {
    const matchingInterests = project.partnership_type.filter(type => 
      profile.partnership_interests.includes(type)
    );
    
    if (matchingInterests.length > 0) {
      score += 10 * matchingInterests.length;
    }
  }
  
  // Normalize the score to be between 0-100
  return Math.min(100, Math.max(0, score));
}
