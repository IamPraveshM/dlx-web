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
          .from('services')
          .select('*')
          .eq('is_published', true)
          .order('created_at', { ascending: true });

        if (error) throw error;
        setServices(data ?? []);
      } catch (err) {
        setError(err instanceof Error ? err.message : String(err));
      } finally {
        setLoading(false);
      }
    }

    fetchServices();
  }, []);

  return { services, loading, error };
}