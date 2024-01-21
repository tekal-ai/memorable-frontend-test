import { useRepositoryFeature } from "src/app/features/repositories/repositories.feature";
import { CreativeLibraryItem } from "src/graphql/client";
import type {Brand} from "src/graphql/client/schema";

export interface CreativeRepository {
  getCreatives(brandId:Brand): Promise<CreativeLibraryItem[]>;
}

export const useCreativesDomain = (repoId = "CreativeRepository") => {
  const { repository } = useRepositoryFeature<CreativeRepository>(repoId);

  const getCreatives= (brandId: Brand) => {
    return repository.getCreatives(brandId);
  };

  return {
    getCreatives,
  };
};
