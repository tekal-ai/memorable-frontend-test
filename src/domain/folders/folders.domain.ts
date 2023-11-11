import { useRepositoryFeature } from "src/app/features/repositories/repositories.feature";
import { CreativeLibraryFolder } from "src/graphql/client";

export interface FolderRepository {
  getFolders(brandId:string): Promise<CreativeLibraryFolder>;
}

export const useFoldersDomain = (repoId = "FolderBackendRepository") => {
  const { repository } = useRepositoryFeature<FolderRepository>(repoId);

  const getFolders = (brandId:string) => {
    return repository.getFolders(brandId);
  };

  return {
    getFolders
  };
};
