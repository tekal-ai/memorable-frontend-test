import { useRepositoryFeature } from "src/app/features/repositories/repositories.feature";
import {
  CreativeLibraryFilter,
  CreativeLibraryFolder,
} from "src/graphql/client";

export interface LibraryRepository {
  listFolders(input: CreativeLibraryFilter): Promise<CreativeLibraryFolder>;
}

export const useLibraryDomain = (repoId = "LibraryRepository") => {
  const { repository } = useRepositoryFeature<LibraryRepository>(repoId);

  const listFolders = (input: CreativeLibraryFilter) => {
    return repository.listFolders(input);
  };

  return {
    listFolders,
  };
};
