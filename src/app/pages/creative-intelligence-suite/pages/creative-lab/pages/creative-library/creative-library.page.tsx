import { FC } from "react";
import { useSessionFeature } from "src/app/features/session/session.feature";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import { EmptyCreateUI } from "src/app/ui/empty/empty-create.ui";
import { SearchInputUI } from "src/app/ui/inputs/search-input.ui";
import { useCreativesDomain } from "src/domain/creatives/creatives.domain";
import useSWR from "swr";
import { CreativesTableWidget } from "./creative.table.widget";

const CreativeLibraryPage: FC = () => {
  const { currentBrand } = useSessionFeature();
  const { getCreativeLibraryFolder } = useCreativesDomain();

  const { data: creativeLibraryFolder } = useSWR(
    ["gettingCreativeLibraryFolder", currentBrand?.id],
    ([url, brandId]) =>
      getCreativeLibraryFolder(brandId ? { brandId } : { brandId: "" }),
  );

  const creatives = creativeLibraryFolder?.creatives ?? [];

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
      {creatives?.length > 0 ? (
        <CreativesTableWidget data={creatives} />
      ) : (
        <EmptyCreateUI description="You don't have any creatives yet." />
      )}
    </CardPageUI>
  );
};
export default CreativeLibraryPage;
