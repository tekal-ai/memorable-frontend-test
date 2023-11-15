import { useRepositoryFeature } from "src/app/features/repositories/repositories.feature";
import { Brand, CreateBrandInput } from "src/graphql/client";

export interface BrandRepository {
  getBrands(): Promise<Brand[]>;
  createBrand(input: CreateBrandInput): Promise<Brand>;
}

export const useBrandsDomain = (repoId = "BrandRepository") => {
  const { repository } = useRepositoryFeature<BrandRepository>(repoId);

  const getBrands = () => {
    return repository.getBrands();
  };

  const createBrands = (input: CreateBrandInput) => {
    return repository.createBrand(input);
  };

  return {
    getBrands,
    createBrands,
  };
};
