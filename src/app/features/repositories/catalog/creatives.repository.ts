import { client } from "src/app/features/repositories/clients/graphql.client";
import { CreativesRepository } from "src/domain/creatives/creatives.domain";
import {
  CreativeLibraryFilter,
  CreativeLibraryFolder,
} from "src/graphql/client";

export class CreativesBackendRepository implements CreativesRepository {
  async getCreatives(
    input: CreativeLibraryFilter,
  ): Promise<CreativeLibraryFolder> {
    return client.chain.query.listFolder({ input: input }).get({
      creatives: { creativeId: 1, name: 1, fileType: 1, url: 1, createdAt: 1 },
    }) as Promise<CreativeLibraryFolder>;
  }
}
