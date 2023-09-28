import { Avatar } from "antd";
import { ColumnsType } from "antd/es/table";
import { FC } from "react";
import { TableUI } from "src/app/ui/tables/table.ui";
import { CreativeLibraryItem } from "src/graphql/client";
import { titleCaseFormatterTool } from "src/app/tools/formatters/title-case.formatter.tool";
import { dateFormatterTool } from "src/app/tools/formatters/date.formatter.tool";

export const CreativesTableWidget: FC<any> = ({ data = [] }) => {
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
                backgroundColor: "rgb(66 182 245)",
                color: "#fffff",
                fontWeight: "bold",
                border: "2px solid black",
              }}
              shape="square"
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
      render: (date) => {
        return (
          <div style={{ display: "flex", gap: "8px" }}>
            <div className="flex items-center">
              <div>{dateFormatterTool(date)}</div>
            </div>
          </div>
        );
      },
    },
    {
      title: "File Type",
      dataIndex: "fileType",
      render: (type) => {
        return (
          <div style={{ display: "flex", gap: "8px" }}>
            <div className="flex items-center">
              <div>{titleCaseFormatterTool(type)}</div>
            </div>
          </div>
        );
      },
    },
  ];

  return <TableUI columns={columns} data={data.map(generateCreativeKey)} />;
};
