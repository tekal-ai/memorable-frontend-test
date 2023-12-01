import { FC, useEffect, useState } from "react";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import { SearchInputUI } from "src/app/ui/inputs/search-input.ui";
import { CreativesTableWidget } from "./creatives.table.widget"
import { useSessionFeature } from "src/app/features/session/session.feature";
import { CreativeLibraryFilter, CreativeLibraryItem } from "src/graphql/client";
import { LoadingPage } from "src/app/features/operations/features/loadings/pages/loading.page";
import useListFolder from "./useListFolder";


const CreativeLibraryPage: FC = () => {
  const [ data, setData ] = useState<Array<CreativeLibraryItem>>([]);
  const { currentBrand } = useSessionFeature();
  const request: CreativeLibraryFilter = { brandId: currentBrand?.id || ""}
  const { isLoading, getCreatives } =  useListFolder();

  const getData = async () => {
    const creatives = await getCreatives(request);
    setData(creatives as Array<CreativeLibraryItem>);
  }
  useEffect(() => {
    getData();
  }, [currentBrand])

  if (isLoading) {
    return (<LoadingPage />);
  }

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
      <CreativesTableWidget data={data} />
    </CardPageUI>
  );
};
export default CreativeLibraryPage;
