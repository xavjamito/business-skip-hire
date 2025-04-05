import { useState, useEffect } from 'react';
import { Skip } from '../types/types';

export function useSkipData() {
  const [skipData, setSkipData] = useState<Skip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/data.json');
        if (!response.ok) {
          throw new Error('Failed to fetch skip data');
        }
        const data = await response.json();
        setSkipData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { skipData, loading, error };
} 