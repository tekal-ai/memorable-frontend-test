import { Avatar } from "antd";
import moment from "moment";

export default [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text: string, record: any) => (
      <div className="flex items-center">
        <Avatar src={record.url} />
        <span className="ml-6">{text}</span>
      </div>
    ),
  },
  {
    title: "Updated",
    dataIndex: "updatedAt",
    key: "updatedAt",
    render: (text: string) => (
      <span className="flex">
        {moment(text).format("DD/MM/YYYY")}
      </span>
    ),
  },
  {
    title: "Filetype",
    dataIndex: "fileType",
    key: "fileType",
  },
];