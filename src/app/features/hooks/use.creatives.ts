import { useSessionFeature } from "src/app/features/session/session.feature";
import { useState, useEffect } from "react";
import { CreativeBackendRepository } from "src/app/features/repositories/catalog/creative.repository";
import { CreativeLibraryItem } from "src/graphql/client";

export const useCreatives = () => {
  const { currentBrand }: { currentBrand: any } = useSessionFeature();

  const [creatives, setCreatives] = useState<CreativeLibraryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!currentBrand) return;

    setLoading(true);
    const repository = new CreativeBackendRepository();

    repository
      .getCreativesForBrand(currentBrand.id)
      .then((creatives: CreativeLibraryItem[]) => {
        setCreatives(creatives);
      })
      .catch((err: Error) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentBrand]);

  return { creatives, loading, error };
};
