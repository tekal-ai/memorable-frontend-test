import { useRepositoryFeature } from "src/app/features/repositories/repositories.feature";
import {
  AssetChecks,
  BrandAssetsInput,
  IntegrationsAssets,
} from "src/graphql/client";

type updateBrandAssetsInput = {
  assets: BrandAssetsInput;
  brandId: string;
};

export interface AssetsRepository {
  getAssets(): Promise<IntegrationsAssets>;
  updateBrandAssets(args: updateBrandAssetsInput): Promise<AssetChecks>;
}

export const useAssetsDomain = (repo = "AssetsRepository") => {
  const { repository } = useRepositoryFeature<AssetsRepository>(repo);

  const getAssets = async () => {
    return repository.getAssets();
  };

  const updateBrandAssets = async (args: updateBrandAssetsInput) => {
    return repository.updateBrandAssets(args);
  };

  return {
    getAssets,
    updateBrandAssets,
  };
};
