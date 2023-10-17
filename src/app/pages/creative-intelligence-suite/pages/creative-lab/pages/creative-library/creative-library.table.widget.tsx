import { Image } from "antd";
import { ColumnsType } from "antd/es/table";
import { FC } from "react";
import { TableUI } from "src/app/ui/tables/table.ui";
import { CreativeLibraryItem } from "src/graphql/client";

type Props = {
  data: CreativeLibraryItem[]
}

export const CreativeLibraryTableWidget: FC<Props> = ({ data }) => {
  const columns: ColumnsType<CreativeLibraryItem> = [
    {
      title: "Name",
      dataIndex: "name",
      render: (name: string, record) => {
        return (
          <div style={{ display: "flex", gap: "8px" }}>
            <Image width={36} src={record.url} />
            <div className="flex items-center">
              <p className="text-gray-400">{name}</p>
            </div>
          </div>
        );
      },
    },
    {
      title: "Uploaded Date",
      dataIndex: "createdAt",
      render: (date: string) => {
        return (
          <div className="flex items-center">
            <p className="text-gray-400">{new Date(date).toLocaleDateString()}</p>
          </div>
        );
      },
    },
    {
      title: "Filetype",
      dataIndex: "fileType",
      render: (fileType: string) => {
        return (
          <div className="flex items-center">
            <p className="lowercase	text-gray-400 first-letter:capitalize">
              {fileType}
            </p>
          </div>
        );
      },
    },
  ];

  return <TableUI columns={columns} data={data} />;
};
