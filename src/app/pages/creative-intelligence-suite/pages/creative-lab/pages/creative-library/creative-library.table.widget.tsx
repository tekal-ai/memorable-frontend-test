import { Avatar } from "antd";
import { ColumnsType } from "antd/es/table";
import { FC } from "react";
import { TableUI } from "src/app/ui/tables/table.ui";
import { CreativeLibraryItem } from "src/graphql/client";

const generateCreativeLibraryKey = (item: CreativeLibraryItem) => ({
  ...item,
  key: item.creativeId,
});

const CreativeLibraryTableWidget: FC<any> = ({ data }) => {
  const columns: ColumnsType<CreativeLibraryItem> = [
    {
      title: "Name",
      dataIndex: "name",
      render: (name: string, record) => (
        <div style={{ display: "flex", gap: "8px" }}>
          <Avatar
            src={record.url}
            shape="square"
            style={{
              backgroundColor: "black",
              color: "#1677ff",
              fontWeight: "bold",
            }}
            key={record.creativeId}
          >
            {record.url ? "" : name[0]}
          </Avatar>
          <div className="flex items-center">
            <p className="text-gray-400">{name}</p>
          </div>
        </div>
      ),
    },
    {
      title: "Uploaded Date",
      dataIndex: "createdAt",
      render: (createdAt: string) => (
        <div className="flex items-center">
          <p className="text-gray-400">
            {new Date(createdAt).toLocaleString()}
          </p>
        </div>
      ),
    },
    {
      title: "File Type",
      dataIndex: "fileType",
      render: (fileType: string) => (
        <div className="flex items-center">
          <p className="lowercase	text-gray-400 first-letter:capitalize">
            {fileType}
          </p>
        </div>
      ),
    },
  ];

  return (
    <TableUI columns={columns} data={data.map(generateCreativeLibraryKey)} />
  );
};

export default CreativeLibraryTableWidget;
