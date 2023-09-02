import { useRepositoryFeature } from "src/app/features/repositories/repositories.feature";
import {
  CreativeLibraryFilter,
  CreativeLibraryFolder,
} from "src/graphql/client";

export interface CreativeRepository {
  getCreativeLibraryFolder(
    input: CreativeLibraryFilter,
  ): Promise<CreativeLibraryFolder>;
}

export const useCreativesDomain = (repoId = "CreativeRepository") => {
  const { repository } = useRepositoryFeature<CreativeRepository>(repoId);

  const getCreativeLibraryFolder = (input: CreativeLibraryFilter) =>
    repository.getCreativeLibraryFolder(input);

  return {
    getCreativeLibraryFolder,
  };
};
