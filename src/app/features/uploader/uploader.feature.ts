import {
  CreativeInput,
  CreativeLibraryItem,
  UploadDataResponse,
  UploadRequestInput,
} from "src/graphql/client";
import { useRepositoryFeature } from "../repositories/repositories.feature";

export interface UploaderRepository {
  generatePresignedUrl: (
    input: UploadRequestInput,
  ) => Promise<UploadDataResponse>;
  saveFile: (input: CreativeInput) => Promise<CreativeLibraryItem>;
}

export const useUploaderFeature = (repoId = "UploaderRepository") => {
  const { repository } = useRepositoryFeature<UploaderRepository>(repoId);

  const generatePresignedUrl = (input: UploadRequestInput) => {
    return repository.generatePresignedUrl(input);
  };

  const saveFile = (input: CreativeInput) => {
    return repository.saveFile(input);
  };

  return {
    generatePresignedUrl,
    saveFile,
  };
};
