import {
  CreativeLibraryFilter,
  CreativeLibraryFolder,
} from "src/graphql/client";

export interface CreativesRepository {
  listFolder(args: CreativeLibraryFilter): Promise<CreativeLibraryFolder>;
}
