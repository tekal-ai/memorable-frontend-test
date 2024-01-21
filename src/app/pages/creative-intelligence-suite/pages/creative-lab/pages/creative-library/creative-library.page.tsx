import { FC, useState, useEffect } from "react";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import { SearchInputUI } from "src/app/ui/inputs/search-input.ui";
import { useSessionFeature } from "src/app/features/session/session.feature";

import { useCreativesDomain } from "src/domain/creatives/creatives.domain";
import { CreativeLibraryItem } from "src/graphql/client";
import CreativeLibraryTable from "./creative-library.table.widget"

const CreativeLibraryPage: FC = () => {

  const { currentBrand } = useSessionFeature();
  const creativities = useCreativesDomain();
  const [data, setData] = useState<CreativeLibraryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (currentBrand) {
      setLoading(true);
      creativities.getCreatives(currentBrand)
        .then((response: CreativeLibraryItem[]) => {
          setData(response.map(creative => ({ ...creative, key: creative.creativeId })));
        })
        .catch((error) => console.error("Fetching Creativities", error))
        .finally(() => setLoading(false));
    }
  }, [currentBrand]);
  
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
      <pre> <CreativeLibraryTable data={data} loading={loading}/></pre>
    </CardPageUI>
  );
};
export default CreativeLibraryPage;
