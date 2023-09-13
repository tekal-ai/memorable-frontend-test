import { client } from "src/app/features/repositories/clients/graphql.client";
import { CreativesRepository } from "src/domain/creatives/creatives.domain";
import { CreativeLibraryFilter, CreativeLibraryItem } from "src/graphql/client";

export class CreativesBackendRepository implements CreativesRepository {
  async getCreatives(
    input: CreativeLibraryFilter,
  ): Promise<CreativeLibraryItem[]> {
    const response = await client.chain.query.listFolder({ input: input }).get({
      creatives: {
        name: 1,
        url: 1,
        fileType: 1,
        createdAt: 1,
        creativeId: 1,
      },
    });

    if (!response?.creatives) return [];

    return response.creatives as CreativeLibraryItem[];
  }
}
