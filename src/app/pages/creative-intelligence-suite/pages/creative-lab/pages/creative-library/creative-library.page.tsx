import { FC } from "react";
import { useSessionFeature } from "src/app/features/session/session.feature";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import { EmptyCreateUI } from "src/app/ui/empty/empty-create.ui";
import { SearchInputUI } from "src/app/ui/inputs/search-input.ui";
import { useLibraryDomain } from "src/domain/library/library.domain";
import useSWR from "swr";

import CreativeLibraryTableWidget from "./creative-library.table.widget";

const CreativeLibraryPage: FC = () => {
  const { currentBrand } = useSessionFeature();
  const { listFolders } = useLibraryDomain();

  const { data } = useSWR(currentBrand?.id, (brandId) =>
    listFolders({ brandId }),
  );

  const creatives = data?.creatives ?? [];
  const hasCreatives = creatives?.length > 0;

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
      {hasCreatives ? (
        <CreativeLibraryTableWidget data={creatives} />
      ) : (
        <EmptyCreateUI
          description={`${currentBrand?.name} does not have creatives yet.`}
        />
      )}
    </CardPageUI>
  );
};

export default CreativeLibraryPage;
