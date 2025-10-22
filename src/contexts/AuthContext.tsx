import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { User, SignUpCredentials, SignInCredentials } from '../types/auth';

interface UserPlan {
  plan: 'free' | 'premium';
}

interface AuthContextType {
  user: User | null;
  userPlan: UserPlan | null;
  loading: boolean;
  signUp: (credentials: SignUpCredentials) => Promise<{ error: any | null }>;
  signIn: (credentials: SignInCredentials) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ error: string | null }>;
  updateUser: (updates: { email?: string; password?: string; data?: { [key: string]: any; }; }) => Promise<{ error: string | null }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userPlan, setUserPlan] = useState<UserPlan | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserAndPlan = async (sessionUser: User) => {
      if (sessionUser) {
        try {
          const { data: profile, error } = await supabase
            .from('profiles')
            .select('plan')
            .eq('id', sessionUser.id)
            .single();

          if (error) {
            console.error('Error fetching user plan:', error);
            setUserPlan({ plan: 'free' }); // Default to free plan on error
          } else if (profile) {
            setUserPlan({ plan: profile.plan as 'free' | 'premium' });
          }
        } catch (e) {
          console.error('Caught error fetching plan:', e);
          setUserPlan({ plan: 'free' });
        }
      } else {
        setUserPlan(null);
      }
    };

    const initializeAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        const sessionUser = session?.user as User || null;
        setUser(sessionUser);
        if (sessionUser) {
          await fetchUserAndPlan(sessionUser);
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      const sessionUser = session?.user as User || null;
      setUser(sessionUser);
      if (sessionUser) {
        await fetchUserAndPlan(sessionUser);
      } else {
        setUserPlan(null);
      }
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);
  
  // ... (signUp, signIn, signOut, resetPassword, updateUser functions remain the same)
  const signUp = async (credentials: SignUpCredentials) => {
    try {
      const { error } = await supabase.auth.signUp(credentials);
      if (error) {
        return { error };
      }
      return { error: null };
    } catch (error: any) {
      return { error: error.message || 'Beklenmeyen bir hata oluştu' };
    }
  };

  const signIn = async ({ email, password }: SignInCredentials) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) return { error: error.message };
      if (data.user) return { error: null };
      return { error: 'Giriş işlemi başarısız oldu' };
    } catch (error: any) {
      return { error: error.message || 'Beklenmeyen bir hata oluştu' };
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  const resetPassword = async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      if (error) return { error: error.message };
      return { error: null };
    } catch (error: any) {
      return { error: error.message || 'Beklenmeyen bir hata oluştu' };
    }
  };

  const updateUser = async (updates: { email?: string; password?: string; data?: { [key: string]: any; }; }) => {
    try {
      const { data, error } = await supabase.auth.updateUser(updates);
      if (error) return { error: error.message };
      
      if (data.user) {
        setUser(currentUser => {
            if (currentUser) {
                // Create a new object that merges currentUser and data.user
                const updatedUser = { ...currentUser, ...data.user };
                // Ensure all required fields of User are present
                return updatedUser as User;
            }
            return data.user as User;
        });
      }
      return { error: null };
    } catch (error: any) {
      return { error: error.message || 'Beklenmeyen bir hata oluştu' };
    }
  };


  const value = {
    user,
    userPlan,
    loading,
    signUp,
    signIn,
    signOut,
    resetPassword,
    updateUser,
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
