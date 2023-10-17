import { FC, useEffect } from "react";
import useSWR from "swr";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import { SearchInputUI } from "src/app/ui/inputs/search-input.ui";
import { CreativeLibraryTableWidget } from "./creative-library.table.widget";
import { useLibraryDomain } from "src/domain/library/library.domain";
import { useSessionFeature } from "src/app/features/session/session.feature";

const CreativeLibraryPage: FC = () => {
  const { currentBrand } = useSessionFeature();
  const { listFolders } = useLibraryDomain();

  const { data } = useSWR(currentBrand?.id, (brandId) =>
    listFolders({ brandId }),
  );

  const creatives = data?.creatives ?? [];

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

      <CreativeLibraryTableWidget data={creatives} />
    </CardPageUI>
  );
};
export default CreativeLibraryPage;
