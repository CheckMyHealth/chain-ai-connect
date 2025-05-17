
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';
import { Profile } from '@/types/database.types';

export const authService = {
  async signUp(email: string, password: string) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      toast({
        title: 'Sign up failed',
        description: error.message,
        variant: 'destructive'
      });
      throw error;
    }

    return data;
  },

  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      toast({
        title: 'Sign in failed',
        description: error.message,
        variant: 'destructive'
      });
      throw error;
    }

    return data;
  },

  async signOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      toast({
        title: 'Sign out failed',
        description: error.message,
        variant: 'destructive'
      });
      throw error;
    }
  },
  
  async getProfile(): Promise<Profile | null> {
    const user = await supabase.auth.getUser();
    
    if (!user.data.user) {
      return null;
    }
    
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.data.user.id)
      .single();
      
    if (error) {
      console.error('Error fetching profile:', error);
      return null;
    }
    
    return data;
  },
  
  async updateProfile(profileData: Partial<Profile>) {
    const user = await supabase.auth.getUser();
    
    if (!user.data.user) {
      throw new Error('User not authenticated');
    }
    
    const { data, error } = await supabase
      .from('profiles')
      .update({
        ...profileData,
        updated_at: new Date().toISOString()
      })
      .eq('id', user.data.user.id)
      .select()
      .single();
      
    if (error) {
      toast({
        title: 'Profile update failed',
        description: error.message,
        variant: 'destructive'
      });
      throw error;
    }
    
    return data;
  }
};
