import { Avatar } from "antd";
import { ColumnsType } from "antd/es/table";
import { FC } from "react";
import { TableUI } from "src/app/ui/tables/table.ui";
import { CreativeLibraryItem } from "src/graphql/client";
import { titleCaseFormatterTool } from "src/app/tools/formatters/title-case.formatter.tool";
import { format } from "date-fns";
import { ImageUI } from "src/app/ui/images/image.ui";

export const CreativesTableWidget: FC<any> = ({ data = [] }) => {
  const generateCreativeKey = (creative: CreativeLibraryItem) => ({
    ...creative,
    key: creative.creativeId,
  });

  const columns: ColumnsType<CreativeLibraryItem> = [
    {
      title: "",
      dataIndex: "name",
      render: (_, item) => {
        return (
          <ImageUI
            src={item.url}
            style={{ width: "50px", minWidth: "50px", borderRadius: "5%" }}
          />
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      render: (name) => {
        return <span>{name}</span>;
      },
    },
    {
      title: "Uploaded Date",
      dataIndex: "createdAt",
      render: (date) => {
        return <span>{format(new Date(date), "dd/MM/yyyy")}</span>;
      },
    },
    {
      title: "File Type",
      dataIndex: "fileType",
      render: (type) => {
        return <span>{titleCaseFormatterTool(type)}</span>;
      },
    },
  ];

  return <TableUI columns={columns} data={data.map(generateCreativeKey)} />;
};
