// CreativeLibraryTable.tsx
import React from 'react';
import { TableUI } from "src/app/ui/tables/table.ui";
import { CreativeLibraryItem } from "src/graphql/client";
import { ColumnsType } from "antd/es/table";

interface CreativeLibraryTableProps {
  data: CreativeLibraryItem[];
  loading: boolean;
}

const CreativeLibraryTable: React.FC<CreativeLibraryTableProps> = ({ data, loading }) => {
 
    const generateCreativeKey = (creative: CreativeLibraryItem) => ({ ...creative, key: creative.creativeId });

    const columns: ColumnsType<CreativeLibraryItem> = [
        {
          title: "Name",
          dataIndex: "name",
          render: (name: string, record) => (
            <div style={{ display: "flex", gap: "8px" }}>
              <img src={record.url} alt={name} width={48} height={48} />
              <div className="flex items-center">
                <div>{record.name}</div>
              </div>
            </div>
          ),
        }, {
          title: "Uploaded Date",
          dataIndex: "createdAt",
          render: (createdAt) => {
            const date = new Date(createdAt);
            const readableDateTime = date.toLocaleString();
            return (
              <div style={{ display: "flex", gap: "8px" }}>
                {readableDateTime}
              </div>
            );
          },
        }, {
          title: "File Type",
          dataIndex: "fileType",
          render: (fileType: string) => (
            <div style={{ display: "flex", gap: "8px" }}>
              {fileType}
            </div>
          )
        },
      ];
    

  return (
    <TableUI columns={columns} data={data.map(generateCreativeKey)} isLoading={loading} />
  );
};

export default CreativeLibraryTable;
