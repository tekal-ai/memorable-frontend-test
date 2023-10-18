import { useRepositoryFeature } from "src/app/features/repositories/repositories.feature";
import { CreativeLibraryItem } from "src/graphql/client";

export interface CreativesRepository {
  getCreatives(
    currentBrandId: string | undefined,
  ): Promise<CreativeLibraryItem[]>;
}

export const useCreativesDomain = (
  currentBrandId: string | undefined,
  repoId = "CreativesRepository",
) => {
  const { repository } = useRepositoryFeature<CreativesRepository>(repoId);

  const getCreatives = () => {
    return repository.getCreatives(currentBrandId);
  };

  return { getCreatives };
};
