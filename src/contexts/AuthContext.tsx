
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';
import { toast } from '@/hooks/use-toast';

type AuthContextType = {
  session: Session | null;
  user: any;
  signInWithEmail: (email: string, password: string) => Promise<void>;
  signUpWithEmail: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  loading: boolean;
  isConfigured: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isConfigured, setIsConfigured] = useState(false);

  useEffect(() => {
    const checkConfig = () => {
      const configured = isSupabaseConfigured();
      setIsConfigured(configured);
      
      if (!configured) {
        console.warn('Supabase credentials not properly configured. Authentication features will not work correctly.');
        toast({
          title: 'Authentication Notice',
          description: 'Supabase credentials are not configured. Some features may not work properly.',
          variant: 'destructive',
        });
        setLoading(false);
        return false;
      }
      return true;
    };

    const fetchSession = async () => {
      if (!checkConfig()) return;
      
      setLoading(true);
      
      try {
        // Get current session
        const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Error fetching session:', error);
          toast({
            title: 'Authentication Error',
            description: 'Failed to retrieve authentication session.',
            variant: 'destructive',
          });
        } else {
          setSession(session);
          setUser(session?.user ?? null);
        }
      } catch (err) {
        console.error('Session retrieval error:', err);
      } finally {
        setLoading(false);
      }
    };

    // Call the function
    fetchSession();

    // Set up listener for auth state changes
    let subscription;
    if (isSupabaseConfigured()) {
      const { data } = supabase.auth.onAuthStateChange((event, currentSession) => {
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        setLoading(false);
      });
      subscription = data.subscription;
    }

    return () => {
      if (subscription) {
        subscription.unsubscribe();
      }
    };
  }, []);

  const signInWithEmail = async (email: string, password: string) => {
    if (!isConfigured) {
      toast({
        title: 'Authentication Error',
        description: 'Supabase is not configured properly. Please set up your environment variables.',
        variant: 'destructive',
      });
      return;
    }

    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      toast({
        title: 'Welcome back!',
        description: 'You have successfully signed in.',
      });
    } catch (error: any) {
      toast({
        title: 'Sign in failed',
        description: error.message || 'An error occurred during sign in.',
        variant: 'destructive',
      });
      throw error;
    }
  };

  const signUpWithEmail = async (email: string, password: string) => {
    if (!isConfigured) {
      toast({
        title: 'Authentication Error',
        description: 'Supabase is not configured properly. Please set up your environment variables.',
        variant: 'destructive',
      });
      return;
    }

    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      toast({
        title: 'Registration successful',
        description: 'Please check your email to confirm your account.',
      });
    } catch (error: any) {
      toast({
        title: 'Registration failed',
        description: error.message || 'An error occurred during registration.',
        variant: 'destructive',
      });
      throw error;
    }
  };

  const signOut = async () => {
    if (!isConfigured) return;

    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      toast({
        title: 'Signed out',
        description: 'You have been successfully signed out.',
      });
    } catch (error: any) {
      toast({
        title: 'Sign out failed',
        description: error.message || 'An error occurred during sign out.',
        variant: 'destructive',
      });
    }
  };

  const value = {
    session,
    user,
    signInWithEmail,
    signUpWithEmail,
    signOut,
    loading,
    isConfigured,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
