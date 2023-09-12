import { ColumnsType } from "antd/es/table";
import { Avatar } from "antd";
import { FC } from "react";
import { TableUI } from "src/app/ui/tables/table.ui";
import { Brand } from "src/graphql/client";

export const LibraryTableWidget: FC<any> = ({ data = [] }) => {
  const generateBrandKey = (brand: Brand) => ({ ...brand, key: brand.id });

  const columns: ColumnsType<Brand> = [
    {
      title: "Name",
      dataIndex: "name",
      render: (name, record) => {
        return (
          <div style={{ display: "flex", gap: "8px" }}>
            <Avatar
              src={record.logoUrl}
              shape="square"
              style={{
                backgroundColor: "#04a6ed",
                border: "2px solid black",
                color: "#ffffff",
                fontWeight: "bold",
              }}
            >
              {record.logoUrl ? "" : name[0]}
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
      dataIndex: "name",
      render: (name) => {
        return (
          <div style={{ display: "flex", gap: "8px" }}>
            <div className="flex items-center">
              <div>{name}</div>
            </div>
          </div>
        );
      },
    },
    {
      title: "File Type",
      dataIndex: "name",
      render: (name) => {
        return (
          <div style={{ display: "flex", gap: "8px" }}>
            <div className="flex items-center">
              <div>{name}</div>
            </div>
          </div>
        );
      },
    },
  ];

  return <TableUI columns={columns} data={data.map(generateBrandKey)} />;
};
