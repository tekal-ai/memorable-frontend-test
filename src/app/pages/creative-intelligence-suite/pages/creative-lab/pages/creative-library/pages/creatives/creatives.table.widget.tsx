import { Avatar } from "antd";
import { ColumnsType } from "antd/es/table";
import { FC } from "react";
import { TableUI } from "src/app/ui/tables/table.ui";
import { CreativeLibraryItem } from "src/graphql/client";

export const CreativesTableWidget: FC<any> = ({ data = [] }) => {
  const generateCreativeKey = (creative: CreativeLibraryItem) => ({
    ...creative,
    createdAt: creative.createdAt.split("T")[0].split("-").reverse().join("/"),
    fileType: creative.fileType.toLocaleLowerCase(),
    key: creative.creativeId,
  });

  const columns: ColumnsType<CreativeLibraryItem> = [
    {
      title: "Name",
      dataIndex: "name",
      render: (name, record) => {
        return (
          <div style={{ display: "flex", gap: "8px" }}>
            <Avatar
              src={record.url}
              style={{
                backgroundColor: "rgb(230 244 255)",
                color: "#1677ff",
                fontWeight: "bold",
              }}
            >
              {record.url ? "" : name[0]}
            </Avatar>
            <div className="flex items-center">
              <div>{name}</div>
            </div>
          </div>
        );
      },
    },
    {
      title: "Uploaded Date",
      dataIndex: "createdAt",
      render: (createdAt) => {
        return (
          <div style={{ display: "flex", gap: "8px" }}>
            <div className="flex items-center">
              <div>{createdAt}</div>
            </div>
          </div>
        );
      },
    },
    {
      title: "File Type",
      dataIndex: "fileType",
      render: (fileType) => {
        return (
          <div style={{ display: "flex", gap: "8px" }}>
            <div className="flex items-center">
              <div style={{ textTransform: "capitalize" }}>{fileType}</div>
            </div>
          </div>
        );
      },
    },
  ];

  return <TableUI columns={columns} data={data.map(generateCreativeKey)} />;
};
