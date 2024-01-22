import { client } from "../clients/graphql.client";
import { CreativeLibraryItem } from "src/graphql/client";
import { CreativeRepository } from "src/domain/creatives/creatives.domain";
import type { Brand } from "src/graphql/client/schema"

export class CreativeBackendRepository implements CreativeRepository {
  async getCreatives(brandId: Brand): Promise<CreativeLibraryItem[]> {
    return new Promise((resolve, reject) => {
      client.chain.query.listFolder({ input: { brandId: brandId.id } }).get({
        id: 1,
        creatives: {
          creativeId: 1,
          name: 1,
          fileType: 1,
          url: 1,
          clipEmbeddingUrl: 1,
          status: 1,
          createdAt: 1,
          updatedAt: 1,
          __typename: 1,
        }
      })
        .then((data) => {
          if (data?.creatives) {
            resolve(data.creatives);
          } else {
            reject(new Error('Creativities are not available now.'));
          }
        })
        .catch(error => reject(error));;

    });
  }
}
