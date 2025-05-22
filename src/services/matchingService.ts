
import { supabase } from '@/integrations/supabase/client';
import { Project, Match, Profile } from '@/types/database.types';

export const matchingService = {
  async analyzeProjectWithAI(projectId: string) {
    try {
      const response = await fetch(
        `https://ttfhpjspuoklbeqyamvi.supabase.co/functions/v1/analyze-project`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${(await supabase.auth.getSession()).data.session?.access_token}`
          },
          body: JSON.stringify({ projectId })
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to analyze project with AI');
      }

      return await response.json();
    } catch (error) {
      console.error('Error analyzing project with AI:', error);
      throw error;
    }
  },
  
  async getProjectMatchDetails(matchId: string): Promise<{match: Match, project: Project, profile: Profile}> {
    const { data, error } = await supabase
      .from('matches')
      .select(`
        *,
        projects:project_id (*),
        profiles:user_id (*)
      `)
      .eq('id', matchId)
      .single();
      
    if (error) throw error;
    return {
      match: data,
      project: data.projects,
      profile: data.profiles
    };
  },
  
  async getRecommendedMatches(limit: number = 5): Promise<Match[]> {
    const user = await supabase.auth.getUser();
    if (!user.data.user) {
      throw new Error('User not authenticated');
    }
    
    const { data, error } = await supabase
      .from('matches')
      .select(`
        *,
        profiles:user_id (
          id,
          full_name,
          company_name,
          avatar_url,
          blockchain_preference,
          partnership_interests
        ),
        projects:project_id (*)
      `)
      .eq('user_id', user.data.user.id)
      .order('match_score', { ascending: false })
      .limit(limit);
    
    if (error) throw error;
    return data;
  }
};
