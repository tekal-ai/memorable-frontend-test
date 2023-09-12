import { useRepositoryFeature } from "src/app/features/repositories/repositories.feature";
import {
  CreativeLibraryFilter,
  CreativeLibraryFolder,
} from "src/graphql/client";

export interface CreativesRepository {
  getCreatives(
    input: CreativeLibraryFilter,
  ): Promise<CreativeLibraryFolder | null>;
}

export const useCreativesDomain = (repoId = "CreativesRepository") => {
  const { repository } = useRepositoryFeature<CreativesRepository>(repoId);

  const getCreatives = (input: CreativeLibraryFilter) => {
    return repository.getCreatives(input);
  };

  return { getCreatives };
};
