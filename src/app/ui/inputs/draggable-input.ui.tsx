import Dragger from "antd/es/upload/Dragger";
import { InboxOutlined } from "@ant-design/icons";
import { FC, useState } from "react";
import { UploadProps } from "antd";
import { toast } from "react-hot-toast";
import { useRequestFeature } from "src/app/features/operations/request.feature";
import { useUploaderFeature } from "src/app/features/uploader/uploader.feature";
import { useSessionFeature } from "src/app/features/session/session.feature";
import { SpinnerUI } from "src/app/features/operations/ui/spinner.ui";
import { UploadDataResponse } from "src/graphql/client";
import { RcFile } from "antd/es/upload";

export const DraggableInputUI: FC<any> = ({ onUpload, folderId }) => {
  const { sendRequest, isLoading } = useRequestFeature();
  const { generatePresignedUrl, saveFile } = useUploaderFeature();
  const { currentBrand } = useSessionFeature();

  const [filesDirectory, setFilesDirectory] = useState<
    Map<string, UploadDataResponse>
  >(new Map());

  async function uploadFile(file: RcFile) {
    const fileUploadData = filesDirectory.get(file.uid);

    const formData = new FormData();
    const fields = fileUploadData?.presignedData.fields;
    if (!fields) return;
    Object.keys(fields).forEach((key) => {
      formData.append(key, fields[key]);
    });
    formData.append("file", file);
    if (!fileUploadData?.presignedData?.url) return;
    const response = await fetch(fileUploadData?.presignedData?.url, {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error(await response.text());
    }
    return response;
  }

  const customRequest = async ({ onSuccess, onError, file }: any) => {
    try {
      await uploadFile(file);
      onSuccess(null, file);
    } catch (error: any) {
      onError(error);
    }
  };

  const onFileUpload = (info: any) => {
    const { name, uid } = info.file;
    const data = filesDirectory.get(uid);
    const creativeId = data?.id;
    if (!creativeId || !currentBrand?.id) return;
    sendRequest({
      request: saveFile({
        brandId: currentBrand.id,
        creativeId,
        folderId,
        name,
      }),
      onSuccess: () => {
        if (onUpload) onUpload(info.file);
        toast.success(`${name} file saved!.`, { id: uid });
      },
    });
    toast.success(`${name} file uploaded!`, { id: uid });
  };

  const onChange = async (info: any) => {
    const { name, status } = info.file;
    if (status === "done") {
      onFileUpload(info);
    } else if (status === "error") {
      toast.error(`${name} file upload failed.`);
    }
  };

  const maxNumberOfAttempts = 3;
  let numberOfAttempts = 0;

  const beforeUpload = async (file: RcFile) => {
    numberOfAttempts++;
    const { type, name, uid } = file;
    await sendRequest({
      id: "generating-presigned-url",
      request: generatePresignedUrl({
        extension: name.split(".").at(-1)?.toLocaleLowerCase() ?? "",
        mimeType: type,
      }),
      onSuccess(response) {
        const data = response.presignedData;
        setFilesDirectory(filesDirectory);
        data.fields = JSON.parse(data.fields);
        filesDirectory.set(uid, response);
      },
      async onError() {
        if (numberOfAttempts >= maxNumberOfAttempts) {
          return toast.error(`Failed to process ${name}`);
        }
        await beforeUpload(file);
      },
    });
  };

  const props: UploadProps = {
    name: "file",
    multiple: true,
    method: "post",
    beforeUpload,
    listType: "picture",
    customRequest,
    onChange,
  };

  return (
    <Dragger {...props}>
      <div
        className="flex flex-col items-center justify-center"
        style={{ height: "200px" }}
      >
        {isLoading("generating-presigned-url") ? (
          <div
            className="flex items-center justify-center gap-2
        "
          >
            <SpinnerUI />
            <p>Processing files...</p>
          </div>
        ) : (
          <>
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">
              Click or drag file to this area to upload
            </p>
            <p className="ant-upload-hint">
              Support for a single or bulk upload. Strictly prohibit from
              uploading company data or other band files
            </p>
          </>
        )}
      </div>
    </Dragger>
  );
};
