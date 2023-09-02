import { CreativeRepository } from "src/domain/creatives/creatives.domain";
import {
  CreativeLibraryFilter,
  CreativeLibraryFolder,
} from "src/graphql/client";
import { client } from "../clients/graphql.client";

export class CreativeBackendRepository implements CreativeRepository {
  async getCreativeLibraryFolder(input: CreativeLibraryFilter) {
    return client.chain.query.listFolder({ input }).get({
      creatives: {
        creativeId: 1,
        name: 1,
        fileType: 1,
        url: 1,
        createdAt: 1,
      },
    }) as Promise<CreativeLibraryFolder>;
  }
}
