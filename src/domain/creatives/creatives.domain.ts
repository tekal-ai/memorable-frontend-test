import { useRepositoryFeature } from "src/app/features/repositories/repositories.feature";
import { CreativeLibraryItem } from "src/graphql/client";

export interface CreativeRepository {
  getCreativesForFolder(brandId: string): Promise<CreativeLibraryItem[]>;
  // Add other methods if required in the future
}

export const useCreativesDomain = (repoId = "CreativeRepository") => {
  const { repository } = useRepositoryFeature<CreativeRepository>(repoId);

  const getCreativesForFolder = (brandId: string) => {
    return repository.getCreativesForFolder(brandId);
  };

  // You can add other methods here if needed in the future

  return {
    getCreativesForFolder,
    // Include other methods here if you added any
  };
};
