import { useRepositoryFeature } from "src/app/features/repositories/repositories.feature";
import {
  Brand,
  CreateBrandInput,
  CreativeLibraryItem,
} from "src/graphql/client";

export interface BrandRepository {
  getBrands(): Promise<Brand[]>;
  createBrand(input: CreateBrandInput): Promise<Brand>;
  getBrandCreatives(brandId: string): Promise<CreativeLibraryItem[]>;
}

export const useBrandsDomain = (repoId = "BrandRepository") => {
  const { repository } = useRepositoryFeature<BrandRepository>(repoId);

  const getBrands = () => {
    return repository.getBrands();
  };

  const createBrands = (input: CreateBrandInput) => {
    return repository.createBrand(input);
  };

  const getBrandCreatives = (brandId: string) => {
    return repository.getBrandCreatives(brandId);
  };

  return {
    getBrands,
    createBrands,
    getBrandCreatives,
  };
};
