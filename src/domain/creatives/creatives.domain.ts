import { useState, useEffect } from 'react';
import { useRepositoryFeature } from "src/app/features/repositories/repositories.feature";
import { CreativeLibraryItem } from "src/graphql/client";
import type {Brand} from "src/graphql/client/schema";

export interface CreativeRepository {
  getCreatives(brandId:Brand): Promise<CreativeLibraryItem[]>;
}

export const useCreativesDomain = (repoId = "CreativeRepository", brandId: Brand) => {
  const { repository } = useRepositoryFeature<CreativeRepository>(repoId);
  const [creativities, setCreativities] = useState<CreativeLibraryItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);


  useEffect(() => {
    const fetchCreativities= async () => {
      setIsLoading(true);
      try {
        const response = await repository.getCreatives(brandId);
        setCreativities(response.map(creative => ({ ...creative, key: creative.creativeId })));
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCreativities();
  }, [repository]);

  return {
    creativities,
    isLoading,
    error,
  };
};
