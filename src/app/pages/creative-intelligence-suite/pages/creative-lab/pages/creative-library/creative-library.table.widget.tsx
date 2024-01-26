import { CSSProperties, FC } from 'react';
import { TableUI } from "src/app/ui/tables/table.ui";
import { CreativeLibraryItem } from "src/graphql/client";
import { ColumnsType } from "antd/es/table";

interface CreativeLibraryTableProps {
  data: CreativeLibraryItem[];
  loading: boolean;
}

const styles: Record <string, CSSProperties> ={
  column:{
    display: "flex",
    gap: "8px"
  }
};

const CreativeLibraryTable: FC<CreativeLibraryTableProps> = ({ data, loading }) => {

  const columns: ColumnsType<CreativeLibraryItem> = [
    {
      title: "Name",
      dataIndex: "name",
      render: (name: string, record) => (
        <div style={styles.column}>
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
          <div style={styles.column}>
            {readableDateTime}
          </div>
        );
      },
    }, {
      title: "File Type",
      dataIndex: "fileType",
      render: (fileType: string) => (
        <div style={styles.column}>
          {fileType}
        </div>
      )
    },
  ];

  return (
    <TableUI columns={columns} data={data} isLoading={loading} />
  );
};

export default CreativeLibraryTable;
