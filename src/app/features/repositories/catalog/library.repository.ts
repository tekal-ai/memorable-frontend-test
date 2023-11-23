import { LibraryRepository } from "src/domain/library/library.domain";
import { CreativeLibraryFilter, CreativeLibraryFolder } from "src/graphql/client";

import { client } from "../clients/graphql.client";

export class LibraryBackendRepository implements LibraryRepository {
  async listFolders(
    input: CreativeLibraryFilter,
  ): Promise<CreativeLibraryFolder> {
    try {
      return client.chain.query.listFolder({ input }).get({
        id: 1,
        creatives: {
          creativeId: 1,
          name: 1,
          fileType: 1,
          url: 1,
          createdAt: 1,
        },
      }) as Promise<CreativeLibraryFolder>;
    } catch (err: any) {
      throw new Error(
        `Error retrieving library creatives list: ${err.message}`,
      );
    }
  }
}
