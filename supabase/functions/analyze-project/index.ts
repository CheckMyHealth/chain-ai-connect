
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Vector similarity function
function cosineSimilarity(vecA: number[], vecB: number[]): number {
  const dotProduct = vecA.reduce((acc, val, i) => acc + val * vecB[i], 0);
  const magnitudeA = Math.sqrt(vecA.reduce((acc, val) => acc + val * val, 0));
  const magnitudeB = Math.sqrt(vecB.reduce((acc, val) => acc + val * val, 0));
  return dotProduct / (magnitudeA * magnitudeB);
}

// Simple text analyzer to create embeddings (in production, use a real embedding model)
function createSimpleEmbedding(text: string): number[] {
  // This is a very simplistic embedding function for demonstration
  // In a real application, you would use a proper embedding model
  
  // Normalize text
  const normalizedText = text.toLowerCase().replace(/[^\w\s]/g, '');
  
  // Get key terms (basic TF approach)
  const terms = normalizedText.split(/\s+/);
  const termFrequency: Record<string, number> = {};
  
  const stopWords = new Set(['a', 'an', 'the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'with', 'by', 'about', 'as']);
  
  terms.forEach(term => {
    if (!stopWords.has(term) && term.length > 1) {
      termFrequency[term] = (termFrequency[term] || 0) + 1;
    }
  });
  
  // Create a simple embedding based on common keywords
  const keyTerms = [
    'blockchain', 'defi', 'nft', 'token', 'crypto', 'web3', 'dao', 'smart', 'contract',
    'ethereum', 'solana', 'bitcoin', 'polygon', 'avalanche', 'investment', 'partnership',
    'technical', 'marketing', 'technology', 'product', 'finance', 'research', 'development'
  ];
  
  // Create a vector based on term frequency of key terms
  const embedding = keyTerms.map(term => {
    return termFrequency[term] || 0;
  });
  
  // Normalize the embedding
  const magnitude = Math.sqrt(embedding.reduce((acc, val) => acc + val * val, 0));
  return magnitude === 0 ? embedding : embedding.map(val => val / magnitude);
}

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
    
    // Prepare project data for analysis
    const projectContent = `
      ${project.title} 
      ${project.description} 
      ${project.requirements} 
      ${project.benefits}
      ${project.partnership_type.join(' ')}
      ${project.blockchain}
    `;
    
    // Create project embedding
    const projectEmbedding = createSimpleEmbedding(projectContent);
    
    const matches = [];
    
    // Analyze each profile for compatibility
    for (const profile of profiles) {
      // Create profile embedding
      const profileContent = `
        ${profile.full_name || ''} 
        ${profile.company_name || ''} 
        ${profile.bio || ''}
        ${profile.blockchain_preference ? profile.blockchain_preference.join(' ') : ''}
        ${profile.partnership_interests ? profile.partnership_interests.join(' ') : ''}
      `;
      
      const profileEmbedding = createSimpleEmbedding(profileContent);
      
      // Calculate similarity using cosine similarity
      const semanticSimilarity = cosineSimilarity(projectEmbedding, profileEmbedding);
      
      // Calculate feature-based match score
      let featureMatchScore = 50; // Base score
      
      // Check blockchain preference match
      if (profile.blockchain_preference && profile.blockchain_preference.includes(project.blockchain)) {
        featureMatchScore += 20;
      }
      
      // Check partnership interests match
      if (profile.partnership_interests && project.partnership_type) {
        const matchingInterests = project.partnership_type.filter(type => 
          profile.partnership_interests!.includes(type)
        );
        
        if (matchingInterests.length > 0) {
          featureMatchScore += 10 * matchingInterests.length;
        }
      }
      
      // Combine semantic and feature-based scores
      const combinedScore = Math.round((semanticSimilarity * 50) + (featureMatchScore * 0.5));
      const finalScore = Math.min(100, Math.max(0, combinedScore));
      
      if (finalScore > 30) {  // Only create matches for scores above a threshold
        matches.push({
          project_id: projectId,
          user_id: profile.id,
          match_score: finalScore,
          status: 'pending',
        });
      }
    }
    
    console.log(`Found ${matches.length} potential matches with NLP analysis`);
    
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
      message: `Advanced analysis complete. Found ${matches.length} potential matches.`,
      matchCount: matches.length
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
