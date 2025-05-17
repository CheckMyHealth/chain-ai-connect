
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface Project {
  id: string;
  title: string;
  description: string;
  company: string;
  blockchain: string;
  partnership_type: string[];
  requirements: string;
  benefits: string;
}

interface Profile {
  id: string;
  full_name: string;
  company_name: string;
  bio: string;
  blockchain_preference: string[];
  partnership_interests: string[];
}

Deno.serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: corsHeaders,
    });
  }

  try {
    // Initialize Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL') || '';
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || '';
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { projectId } = await req.json();
    
    if (!projectId) {
      return new Response(
        JSON.stringify({ error: 'Project ID is required' }),
        { 
          status: 400, 
          headers: { 'Content-Type': 'application/json', ...corsHeaders }
        }
      );
    }

    // Get the project details
    const { data: project, error: projectError } = await supabase
      .from('projects')
      .select('*')
      .eq('id', projectId)
      .single();

    if (projectError || !project) {
      console.error('Error fetching project:', projectError);
      return new Response(
        JSON.stringify({ error: 'Project not found' }),
        { 
          status: 404, 
          headers: { 'Content-Type': 'application/json', ...corsHeaders }
        }
      );
    }

    // Get all profiles for potential matching
    const { data: profiles, error: profilesError } = await supabase
      .from('profiles')
      .select('*');

    if (profilesError) {
      console.error('Error fetching profiles:', profilesError);
      return new Response(
        JSON.stringify({ error: 'Error fetching profiles' }),
        { 
          status: 500, 
          headers: { 'Content-Type': 'application/json', ...corsHeaders }
        }
      );
    }

    // Exclude the project owner
    const filteredProfiles = profiles.filter(profile => profile.id !== project.user_id);
    
    // Simple matching algorithm based on blockchain preference and partnership interests
    const matches = filteredProfiles.map(profile => {
      let score = 0;
      
      // Blockchain match
      if (profile.blockchain_preference && profile.blockchain_preference.includes(project.blockchain)) {
        score += 30;
      }
      
      // Partnership type match
      if (profile.partnership_interests && project.partnership_type) {
        const matchingInterests = profile.partnership_interests.filter(interest => 
          project.partnership_type.includes(interest)
        );
        score += matchingInterests.length * 20;
      }
      
      // Basic match - give some points just for being a user
      score += 10;
      
      return {
        project_id: project.id,
        user_id: profile.id,
        match_score: score,
        status: 'pending'
      };
    });

    // Filter out low scoring matches
    const qualifiedMatches = matches.filter(match => match.match_score >= 30);
    
    // Insert matches into database
    if (qualifiedMatches.length > 0) {
      const { error: insertError } = await supabase
        .from('matches')
        .upsert(qualifiedMatches, { 
          onConflict: 'project_id,user_id',
          ignoreDuplicates: false
        });

      if (insertError) {
        console.error('Error inserting matches:', insertError);
        return new Response(
          JSON.stringify({ error: 'Failed to save matches' }),
          { 
            status: 500, 
            headers: { 'Content-Type': 'application/json', ...corsHeaders }
          }
        );
      }
    }

    // Update project status
    const { error: updateError } = await supabase
      .from('projects')
      .update({ status: 'analyzed' })
      .eq('id', projectId);

    if (updateError) {
      console.error('Error updating project status:', updateError);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Project analyzed successfully',
        matches_found: qualifiedMatches.length
      }),
      { 
        status: 200, 
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      }
    );
    
  } catch (error) {
    console.error('Error in analyze-project function:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { 'Content-Type': 'application/json', ...corsHeaders }
      }
    );
  }
});
