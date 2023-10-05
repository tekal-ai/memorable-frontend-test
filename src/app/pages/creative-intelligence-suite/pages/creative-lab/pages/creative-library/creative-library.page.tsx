import { FC, useState } from "react";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import { SearchInputUI } from "src/app/ui/inputs/search-input.ui";
import { useSessionFeature } from "src/app/features/session/session.feature";
import { useLibraryDomain } from "src/domain/library/library.domain";
import TableColumns from "./creative-table-columns";
import { Table } from "antd";
import useSWR from "swr";

const CreativeLibraryPage: FC = () => {
  const { currentBrand } = useSessionFeature();
  const { getFoldersList } = useLibraryDomain();
  const [searchTerm, setSearchTerm] = useState<string>("");
  
  const fetcher = async () => await getFoldersList({ brandId: currentBrand?.id as string });

  const { data: foldersList, error, isValidating } = useSWR(
    currentBrand?.id ? `folders-${currentBrand.id}` : null, 
    fetcher
  );

  const filteredData = foldersList?.creatives?.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  ) ?? [];
  
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
        <SearchInputUI 
          value={searchTerm} 
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)} 
        />
      </header>
      {isValidating && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {foldersList?.creatives && 
        <Table 
          rowKey="creativeId"
          columns={TableColumns} 
          dataSource={filteredData} 
        />
      }
    </CardPageUI>
  );
};
export default CreativeLibraryPage;
