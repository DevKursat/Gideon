import React, { createContext, useState, useEffect, useContext } from 'react';
import { useAuth } from './AuthContext';
import { supabase } from '../lib/supabase';

type Plan = 'free' | 'premium' | null;

interface SubscriptionContextType {
  plan: Plan;
  loading: boolean;
}

export const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

export const SubscriptionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [plan, setPlan] = useState<Plan>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!user) {
        setLoading(false);
        setPlan(null);
        return;
      }

      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('profiles')
          .select('plan')
          .eq('id', user.id);

        if (error) {
          throw error;
        }

        if (data && data.length > 0) {
          setPlan(data[0].plan as Plan);
        } else {
          setPlan(null); // Explicitly set to null if no profile is found
        }
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setPlan(null);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [user]);

  return (
    <SubscriptionContext.Provider value={{ plan, loading }}>
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscription = () => {
  const context = useContext(SubscriptionContext);
  if (context === undefined) {
    throw new Error('useSubscription must be used within a SubscriptionProvider');
  }
  return context;
};
