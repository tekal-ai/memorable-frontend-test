import { FC, useEffect, useState } from "react";
import { useSessionFeature } from "src/app/features/session/session.feature";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import { SearchInputUI } from "src/app/ui/inputs/search-input.ui";
import { useCreativesDomain } from "src/domain/creatives/creatives.domain";
import { CreativeLibraryItem } from "src/graphql/client";
import { CreativeLibraryTableWidget } from "./creative-library.table.widget";
import { EmptyCreateUI } from "src/app/ui/empty/empty-create.ui";

const CreativeLibraryPage: FC = () => {
  const [creativeData, setCreativeData] = useState<CreativeLibraryItem[]>([]);
  const { currentBrand } = useSessionFeature();
  const { getCreatives } = useCreativesDomain();

  useEffect(() => {
    (async () => {
      if (!currentBrand?.id) return;
      try {
        const creatives = await getCreatives({ brandId: currentBrand?.id });
        setCreativeData(creatives);
      } catch (err) {
        throw new Error(`Error getting creatives: ${err}`);
      }
    })();
  }, [currentBrand?.id]);

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
      {creativeData.length ? (
        <CreativeLibraryTableWidget data={creativeData} />
      ) : (
        <EmptyCreateUI description="You don't have any creatives yet." />
      )}
    </CardPageUI>
  );
};
export default CreativeLibraryPage;
