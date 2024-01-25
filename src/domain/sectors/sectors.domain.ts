import { useState, useEffect } from 'react';
import { useRepositoryFeature } from "src/app/features/repositories/repositories.feature";

export interface Sector {
  id: number;
  count: number;
  name: string;
}

export interface SectorRepository {
  getSectors(): Promise<Sector[]>;
}

export const useSectorsDomain = (repoId = "SectorRepository") => {
  const { repository } = useRepositoryFeature<SectorRepository>(repoId);
  const [sectors, setSectors] = useState<Sector[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchSectors = async () => {
      setIsLoading(true);
      try {
        const data = await repository.getSectors();
        setSectors(data);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSectors();
  }, [repository]);

  return {
    sectors,
    isLoading,
    error,
  };
};
