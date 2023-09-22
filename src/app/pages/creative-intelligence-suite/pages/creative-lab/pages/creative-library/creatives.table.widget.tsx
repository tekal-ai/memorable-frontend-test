import { Avatar, Table } from "antd";
import { FC } from "react";

interface Creative {
  creativeId: string;
  name: string;
  fileType: string;
  url: string;
  createdAt: Date;
}

interface CreativesTableProps {
  data: Creative[];
}

export const CreativesTableWidget: FC<CreativesTableProps> = ({ data }) => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (text: string, record: Creative) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar src={record.url} style={{ marginRight: "8px" }} />
          {text}
        </div>
      ),
    },
    {
      title: "Upload Date",
      dataIndex: "createdAt",
      render: (date: any) => {
        if (!date) return "N/A"; // handle null or undefined date values

        const parsedDate = new Date(date);
        if (isNaN(parsedDate.getTime())) return "Invalid Date"; // handle invalid date values

        return new Intl.DateTimeFormat().format(parsedDate);
      },
    },
    {
      title: "File Type",
      dataIndex: "fileType",
    },
  ];

  return <Table columns={columns} dataSource={data} rowKey="creativeId" />;
};
