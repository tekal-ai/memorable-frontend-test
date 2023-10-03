import {
  CreativeLibraryFilter,
  CreativeLibraryFolderRequest,
} from "src/graphql/client";

export interface CreativesRepository {
  listFolder(
    args: CreativeLibraryFilter,
  ): Promise<CreativeLibraryFolderRequest>;
}
