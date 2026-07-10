import { useState, useEffect } from 'react';
import { supabase } from '../supabase';

export function useServices() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchServices() {
      if (!supabase) {
        setError(
          'Supabase is not configured. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your environment.'
        );
        setLoading(false);
        return;
      }

      try {
        const { data, error } = await supabase
          .from('dynamic_services') 
          .select('*')
          .eq('is_published', true)
          // FIX 1: Changed from 'created_at' to 'title' because created_at doesn't exist in the new table!
          .order('title', { ascending: true });

        if (error) throw error;
        
        setServices(data ?? []);
      } catch (err) {
        // FIX 2: Correctly log the Supabase JSON error object so it doesn't say [object Object]
        console.error("Supabase Fetch Error:", err);
        setError(err.message || "Failed to load services. Please check the console.");
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, []);

  return { services, loading, error };
}