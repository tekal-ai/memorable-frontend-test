import { client } from "../clients/graphql.client";
import { CreativeLibraryFilter, CreativeLibraryItem } from "src/graphql/client";
import { CreativesRepository } from "src/domain/creatives/creative.domain";

export class CreativesBackendRepository implements CreativesRepository {
  async getCreatives(
    input: CreativeLibraryFilter,
  ): Promise<CreativeLibraryItem[]> {
    return new Promise((resolve) => {
      client.chain.query
        .listFolder({ input })
        .get({
          id: 1,
          creatives: {
            creativeId: 1,
            fileType: 1,
            name: 1,
            url: 1,
            createdAt: 1,
          },
        })
        .then((res) => {
          if (!res?.creatives) return resolve([]);
          return resolve(res?.creatives as CreativeLibraryItem[]);
        });
    });
  }
}
