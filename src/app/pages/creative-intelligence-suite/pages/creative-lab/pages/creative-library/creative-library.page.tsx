import { FC } from "react";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import { SearchInputUI } from "src/app/ui/inputs/search-input.ui";
import { useSessionFeature } from "src/app/features/session/session.feature";
import { Avatar } from "antd";
import { ColumnsType } from "antd/es/table";
import { TableUI } from "src/app/ui/tables/table.ui";
import { useBusinessDomain } from "src/domain/business/business.domain";
import useSWR from "swr";

const CreativeLibraryPage: FC = () => {
  const { user, currentBrand } = useSessionFeature();

  const { getListFolder } = useBusinessDomain();

  const { data: listFolder, error } = useSWR(
    "CreativeLibraryFilter",
    () => currentBrand && getListFolder(currentBrand?.id),
  );

  const columns: ColumnsType<any> = [
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
    {
      title: "Uploaded Date",
      dataIndex: "updatedAt",
      render: (date) => <div>{new Date(date).toLocaleDateString()}</div>,
    },
    {
      title: "File Type",
      dataIndex: "fileType", // Replace with the appropriate property from your folder object
      render: (fileType) => <div>{fileType}</div>,
    },
  ];
  return (
    <CardPageUI>
      <header
        className="mb-4 flex gap-4"
        style={{
          position: "sticky",
          top: "0px",
          zIndex: "12",
          background: "white",
          padding: "13px 0",
        }}
      >
        <SearchInputUI />
      </header>
      {listFolder && <TableUI columns={columns} data={listFolder} />}
    </CardPageUI>
  );
};
export default CreativeLibraryPage;
