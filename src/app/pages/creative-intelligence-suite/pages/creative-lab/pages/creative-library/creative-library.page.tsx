import { FC, useEffect, useState } from "react";
import { useSessionFeature } from "src/app/features/session/session.feature";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import { SearchInputUI } from "src/app/ui/inputs/search-input.ui";
import { useCreativesDomain } from "src/domain/creatives/creatives.domain";
import { CreativeLibraryFolder, CreativeLibraryItem } from "src/graphql/client";
import { CreativeLibraryTableWidget } from "./creative-library.table.widget";
// import useSWR from "swr";

const CreativeLibraryPage: FC = () => {
  const [creativeData, setCreativeData] = useState<CreativeLibraryItem[]>([]);
  const { currentBrand } = useSessionFeature();
  const { getCreatives } = useCreativesDomain();

  // const { data: creatives } = useSWR("gettingCreatives", getCreatives);

  useEffect(() => {
    if (currentBrand?.id?.length) {
      getCreatives({ brandId: currentBrand?.id })
        .then((resp: CreativeLibraryFolder | null) => {
          if (resp?.creatives) setCreativeData(resp?.creatives);
        })
        .catch((err) => {
          throw new Error(`Error getting creatives: ${err}`);
        });
    }
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
        <p>You don't have any brands yet.</p>
      )}
    </CardPageUI>
  );
};
export default CreativeLibraryPage;
