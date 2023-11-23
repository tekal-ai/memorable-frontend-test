import { useRepositoryFeature } from "src/app/features/repositories/repositories.feature";
import { CreativeLibraryFilter, CreativeLibraryFolder } from "src/graphql/client";

export interface LibraryRepository {
  listFolders(input: CreativeLibraryFilter): Promise<CreativeLibraryFolder>;
}

/**
 * useLibraryDomain is a custom hook that provides access to the LibraryRepository.
 * @param repoId The ID of the repository to use. Defaults to "LibraryRepository".
 * @returns An object with the listFolders function.
 */
export const useLibraryDomain = (repoId = "LibraryRepository") => {
  const { repository } = useRepositoryFeature<LibraryRepository>(repoId);

  /**
   * listFolders retrieves a list of folders from the repository.
   * @param input The filter to apply to the list of folders.
   * @returns A Promise that resolves to the list of folders.
   */
  const listFolders = (
    input: CreativeLibraryFilter,
  ): Promise<CreativeLibraryFolder> => {
    return repository.listFolders(input);
  };

  return {
    listFolders,
  };
};
