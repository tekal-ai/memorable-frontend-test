import { Avatar } from "antd";
import { ColumnsType } from "antd/es/table";
import { FC } from "react";
import { TableUI } from "src/app/ui/tables/table.ui";
import { Brand } from "src/graphql/client";

export const BrandsTableWidget: FC<any> = ({ data = [] }) => {
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
              style={{
                backgroundColor: "rgb(230 244 255)",
                color: "#1677ff",
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
  ];

  return <TableUI columns={columns} data={data.map(generateBrandKey)} />;
};
