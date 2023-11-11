import { client } from "../clients/graphql.client";
import { CreativeLibraryFolder } from "src/graphql/client";
import { FolderRepository } from "src/domain/folders/folders.domain";

export class FolderBackendRepository implements FolderRepository {
  
  async getFolders(brandId:string) {
    try {
      const folder = await client.chain.query.listFolder({input : {brandId:brandId}})
      .get({creatives:{name:true,fileType:true,createdAt:true,clipEmbeddingUrl:true,url:true}});
      return (folder as CreativeLibraryFolder) ?? null;
    } catch (err: any) {
      throw new Error(`Error retrieving folder: ${err.message}`);
    }
  }
}

