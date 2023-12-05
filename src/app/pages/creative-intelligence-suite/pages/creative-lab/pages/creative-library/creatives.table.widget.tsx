import { Avatar } from "antd";
import { ColumnsType } from "antd/es/table";
import { FC } from "react";
import { TableUI } from "src/app/ui/tables/table.ui";
import { Brand, CreativeLibraryItem } from "src/graphql/client";
const dateFormatter = (date: string): string => {
  const currentDate = new Date(date);
  const yyyy = currentDate.getFullYear();
  let mm : string | number = currentDate.getMonth() + 1; // Months start at 0!
  let dd: string | number = currentDate.getDate();

  if (dd < 10) dd = '0' + dd;
  if (mm < 10) mm = '0' + mm;

const result = dd + '/' + mm + '/' + yyyy;
return result;
}
export const CreativesTableWidget: FC<any> = ({ data = [] }) => {
  const generateCreativeKey = (creative: CreativeLibraryItem) => ({ ...creative, key: creative.creativeId });
  const columns: ColumnsType<CreativeLibraryItem> = [
    {
      title: "Name",
      dataIndex: "name",
      render: (name, { url }) => {
        return (
          <div style={{ display: "flex", gap: "8px" }}>
            <img width={32} src={url} alt={url} />
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
              <div>{dateFormatter(createdAt)}</div>
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
              <div style={{ textTransform: "capitalize"}}>{fileType?.toLowerCase()}</div>
            </div>
          </div>
        );
      },
    },
  ];

  return <TableUI columns={columns} data={data.map(generateCreativeKey)} />;
};
