
import { supabase } from '@/integrations/supabase/client';
import { Project, Match } from '@/types/database.types';
import { matchingService } from './matchingService';

export const projectService = {
  async createProject(projectData: Omit<Project, 'id' | 'user_id' | 'status' | 'created_at' | 'updated_at'>) {
    const user = await supabase.auth.getUser();
    if (!user.data.user) {
      throw new Error('User not authenticated');
    }

    const { data, error } = await supabase
      .from('projects')
      .insert({
        ...projectData,
        user_id: user.data.user.id,
        status: 'pending',
        logo_url: null // Add this explicitly to fix the TypeScript error
      })
      .select()
      .single();

    if (error) throw error;
    return data;
  },
  
  async analyzeProject(projectId: string) {
    try {
      // Use the enhanced AI matching function
      return await matchingService.analyzeProjectWithAI(projectId);
    } catch (error) {
      console.error('Error analyzing project:', error);
      throw error;
    }
  },

  async getUserProjects() {
    const user = await supabase.auth.getUser();
    if (!user.data.user) {
      throw new Error('User not authenticated');
    }

    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .eq('user_id', user.data.user.id)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data;
  },

  async getProjectMatches(projectId: string) {
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
        )
      `)
      .eq('project_id', projectId)
      .order('match_score', { ascending: false });

    if (error) throw error;
    return data;
  },

  async updateMatchStatus(matchId: string, status: string) {
    const { data, error } = await supabase
      .from('matches')
      .update({ status })
      .eq('id', matchId)
      .select();

    if (error) throw error;
    return data;
  },

  async getAllProjects() {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data;
  }
};
