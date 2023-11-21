import { FC } from "react";
import { CreativeLibraryItem } from "src/graphql/client";
import { TableUI } from "src/app/ui/tables/table.ui";
import { ColumnsType } from "antd/es/table";
import * as moment from "moment";

interface Creative {
  creativeId: string;
  name: string;
  fileType: string;
  url: string;
  clipEmbeddingUrl: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export const CreativesTableWidget = ({ data = [] as Creative[] }) => {
  const generateCreativeKey = (creative: Creative) => ({
    ...creative,
    key: creative.creativeId,
  });

  const columns: ColumnsType<Creative> = [
    {
      title: "Name",
      dataIndex: "name",
      render: (name) => {
        return (
          <div className="flex items-center">
            <div>{name}</div>
          </div>
        );
      },
    },
    {
      title: "Uploaded Date",
      dataIndex: "updatedAt",
      render: (updatedAt) => {
        const formattedDate = moment(updatedAt).format("DD/MM/YYYY");
        return (
          <div className="flex items-center">
            <div>{formattedDate}</div>
          </div>
        );
      },
    },
    {
      title: "File Type",
      dataIndex: "fileType",
      render: (fileType) => {
        return (
          <div className="flex items-center">
            <div>{fileType}</div>
          </div>
        );
      },
    },
  ];

  return <TableUI columns={columns} data={data.map(generateCreativeKey)} />;
};
