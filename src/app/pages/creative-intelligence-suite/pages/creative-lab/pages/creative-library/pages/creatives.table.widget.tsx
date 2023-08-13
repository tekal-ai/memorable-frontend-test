import { Avatar } from "antd";
import { ColumnsType } from "antd/es/table";
import { FC } from "react";
import { titleCaseFormatterTool } from "src/app/tools/formatters/title-case.formatter.tool";
import { TableUI } from "src/app/ui/tables/table.ui";
import { CreativeLibraryItem } from "src/graphql/client";
import { format } from "date-fns";

interface CreativesTableWidgetProps {
  data?: CreativeLibraryItem[];
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
              shape="square"
              style={{
                backgroundColor: "black",
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
      dataIndex: "updatedAt",
      render: (updatedAt) => format(new Date(updatedAt), "dd/MM/yyyy"),
    },
    {
      title: "File Type",
      dataIndex: "fileType",
      render: (fileType) => titleCaseFormatterTool(fileType),
    },
  ];

  return <TableUI columns={columns} data={data.map(generateCreativeKey)} />;
};
