import { FC } from "react";
import useSWR from "swr";
import { EmptyCreateUI } from "src/app/ui/empty/empty-create.ui";
import { useSessionFeature } from "src/app/features/session/session.feature";
import { SearchInputUI } from "src/app/ui/inputs/search-input.ui";
import { useBrandsDomain } from "src/domain/brands/brands.domain";
import { CreativesTableWidget } from "./creatives.table.widget";
import { EmptyLoaderUI } from "src/app/ui/empty/empty-loader.ui";

const CreativesPage: FC = () => {
  const { currentBrand } = useSessionFeature();
  const { getBrandCreatives } = useBrandsDomain();

  const { data: creatives, isLoading } = useSWR(
    currentBrand ? ["brand", currentBrand.id, "creatives"] : null,
    () => currentBrand && getBrandCreatives(currentBrand?.id),
    { keepPreviousData: true },
  );

  const hasCreatives = creatives ? creatives.length > 0 : false;

  return (
    <div>
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
      <EmptyLoaderUI isLoading={isLoading}>
        {hasCreatives ? (
          <CreativesTableWidget data={creatives} />
        ) : (
          <EmptyCreateUI
            description={
              isLoading
                ? "Loading creatives"
                : "This brand doesn't have any creatives yet."
            }
          />
        )}
      </EmptyLoaderUI>
    </div>
  );
};
export default CreativesPage;
