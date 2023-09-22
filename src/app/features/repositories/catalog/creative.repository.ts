import { client } from "../clients/graphql.client";
import { CreativeLibraryItem } from "src/graphql/client";
import { CreativeRepository } from "src/domain/creatives/creatives.domain";

export class CreativeBackendRepository implements CreativeRepository {
  getCreativesForFolder(brandId: string): Promise<CreativeLibraryItem[]> {
    throw new Error("Method not implemented.");
  }
  async getCreativesForBrand(brandId: string): Promise<CreativeLibraryItem[]> {
    return new Promise((resolve, reject) => {
      client.chain.query
        .listFolder({ input: { brandId: brandId } })
        .get({
          creatives: {
            creativeId: 1,
            name: 1,
            fileType: 1,
            url: 1,
            status: 1,
            createdAt: 1,
            updatedAt: 1,
          },
        })
        .then((res) => {
          if (!res?.creatives) return resolve([]);
          return resolve(res.creatives as CreativeLibraryItem[]);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  // You can add more methods as needed for other queries or mutations
}
