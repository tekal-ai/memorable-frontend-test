import { useRepositoryFeature } from "src/app/features/repositories/repositories.feature";
import { CreativeLibraryFilter, CreativeLibraryFolder } from "src/graphql/client";

export interface LibraryRepository {
  getFoldersList(input: CreativeLibraryFilter): Promise<CreativeLibraryFolder>;
}

export const useLibraryDomain = (repoId = "LibraryRepository") => {
  const { repository } = useRepositoryFeature<LibraryRepository>(repoId);

  const getFoldersList = (input: CreativeLibraryFilter) => {
    return repository.getFoldersList(input);
  };

  return {
    getFoldersList
  };
};
