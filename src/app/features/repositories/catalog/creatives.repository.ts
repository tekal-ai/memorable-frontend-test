import { CreativesRepository } from "src/domain/creatives/creatives.domain";
import {
  CreativeLibraryFilter,
  CreativeLibraryFolderRequest,
} from "src/graphql/client";
import { client } from "../clients/graphql.client";

export class CreativesBackendRepository implements CreativesRepository {
  async listFolder(
    args: CreativeLibraryFilter,
  ): Promise<CreativeLibraryFolderRequest> {
    return new Promise((resolve) => {
      client.chain.query
        .listFolder({
          input: args,
        })
        .get({
          id: 1,
          creatives: {
            creativeId: 1,
            name: 1,
            fileType: 1,
            url: 1,
            createdAt: 1,
          },
        })
        .then((res) => {
          return resolve(res as CreativeLibraryFolderRequest);
        });
    });
  }
}
