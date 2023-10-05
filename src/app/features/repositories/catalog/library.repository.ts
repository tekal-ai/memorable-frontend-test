import { client } from "src/app/features/repositories/clients/graphql.client";
import { LibraryRepository } from "src/domain/library/library.domain";
import {
  CreativeLibraryFilter,
  CreativeLibraryFolder
} from "src/graphql/client";

export class LibraryBackendRepository implements LibraryRepository {
  async getFoldersList(input: CreativeLibraryFilter) {
    try {
      return client.chain.query
      .listFolder({
        input,
      })
      .get({
        id: 1,
        creatives: { 
          creativeId: 1,
          name: 1,
          fileType: 1,
          url: 1,
          updatedAt: 1,
        }
      }) as Promise<CreativeLibraryFolder>;
    } catch (err: any) {
      throw new Error(`Error retrieving folders list: ${err.message}`);
    }
  }
}
