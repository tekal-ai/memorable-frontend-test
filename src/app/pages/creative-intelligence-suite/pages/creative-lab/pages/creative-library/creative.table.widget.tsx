import { Avatar } from "antd";
import { ColumnsType } from "antd/es/table";
import { FC } from "react";
import { TableUI } from "src/app/ui/tables/table.ui";
import { CreativeLibraryItem } from "src/graphql/client";

interface CreativesTableWidgetProps {
  data: CreativeLibraryItem[];
}

export const CreativesTableWidget: FC<CreativesTableWidgetProps> = ({
  data = [],
}) => {
  const generateCreativeKey = (creative: CreativeLibraryItem) => ({
    ...creative,
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
              {record.url ? "" : name}
            </Avatar>
            <div className="flex items-center">
              <div>{name}</div>
            </div>
          </div>
        );
      },
    },
    {
      title: "File Type",
      dataIndex: "fileType",
      render: (name, record) => {
        return (
          <div className="flex items-center">
            <div>{record.fileType}</div>
          </div>
        );
      },
    },
    {
      title: "Creation Date",
      dataIndex: "createdAt",
      render: (name, record) => {
        return (
          <div className="flex items-center">
            <div>{record.createdAt}</div>
          </div>
        );
      },
    },
  ];

  return <TableUI columns={columns} data={data.map(generateCreativeKey)} />;
};
