import { client } from "../clients/graphql.client";
import {
  Brand,
  CreateBrandInput,
  CreativeLibraryItem,
} from "src/graphql/client";
import { BrandRepository } from "src/domain/brands/brands.domain";

export class BrandBackendRepository implements BrandRepository {
  async getBrands(): Promise<Brand[]> {
    return new Promise((resolve) => {
      client.chain.query.getLoggedInUser
        .get({
          id: 1,
          businessAccount: {
            brands: {
              id: 1,
              name: 1,
              logoUrl: 1,
              sector: 1,
              adAccounts: 1,
              socialAccounts: 1,
            },
          },
        })
        .then((res) => {
          if (!res?.businessAccount?.brands) return resolve([]);
          return resolve(res?.businessAccount?.brands as Brand[]);
        });
    });
  }

  async createBrand(input: CreateBrandInput) {
    return client.chain.mutation.createBrand({ input }).get({
      id: 1,
      name: 1,
      sector: 1,
    }) as Promise<Brand>;
  }

  async getBrandCreatives(brandId: string): Promise<CreativeLibraryItem[]> {
    return new Promise((resolve) => {
      client.chain.query
        .listFolder({
          input: {
            brandId,
          },
        })
        .get({
          creatives: {
            creativeId: 1,
            name: 1,
            fileType: 1,
            url: 1,
            updatedAt: 1,
          },
        })
        .then((res) => {
          if (!res?.creatives) return resolve([]);
          return resolve(res.creatives as CreativeLibraryItem[]);
        });
    });
  }
}
