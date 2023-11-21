import { FC } from "react";
import { CreativeLibraryItem } from "src/graphql/client";
import { TableUI } from "src/app/ui/tables/table.ui";
import { Image } from "antd";
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
      title: <span className="font-bold">Name</span>,
      dataIndex: "name",
      render: (name, creative) => {
        return (
          <div className="flex items-center">
            <Image width={28} className="rounded " src={creative.url} />
            <div className="ml-2 text-gray-300">{name}</div>
          </div>
        );
      },
    },
    {
      title: <span className="font-bold">Uploaded Date</span>,
      dataIndex: "updatedAt",
      render: (updatedAt) => {
        const formattedDate = moment(updatedAt).format("DD/MM/YYYY");
        return (
          <div className="flex items-center">
            <div className="text-gray-300">{formattedDate}</div>
          </div>
        );
      },
    },
    {
      title: <span className="font-bold">File Type</span>,
      dataIndex: "fileType",
      render: (fileType) => {
        return (
          <div className="flex items-center">
            <div className="lowercase text-gray-300">{fileType}</div>
          </div>
        );
      },
    },
  ];

  return <TableUI columns={columns} data={data.map(generateCreativeKey)} />;
};
