import { CreativesRepository } from "src/domain/creatives/creatives.domain";
import {
  CreativeLibraryFilter,
  CreativeLibraryFolder,
} from "src/graphql/client";
import { client } from "../clients/graphql.client";

export class CreativesBackendRepository implements CreativesRepository {
  async listFolder(
    args: CreativeLibraryFilter,
  ): Promise<CreativeLibraryFolder> {
    return new Promise((resolve) => {
      client.chain.query
        .listFolder({
          input: args,
        })
        .get({
          creatives: {
            creativeId: 1,
            fileType: 1,
            name: 1,
            updatedAt: 1,
            url: 1,
          },
        })
        .then((res) => {
          return resolve(res as CreativeLibraryFolder);
        });
    });
  }
}
