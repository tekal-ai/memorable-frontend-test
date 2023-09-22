import { FC } from "react";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import { SearchInputUI } from "src/app/ui/inputs/search-input.ui";
import { useCreatives } from "src/app/features/hooks/use.creatives";
import { CreativesTableWidget } from "./creatives.table.widget";
import { LoadingPage } from "src/app/features/operations/features/loadings/pages/loading.page";

const CreativeLibraryPage: FC = () => {
  const { creatives, loading, error } = useCreatives();

  if (loading) {
    return (
      <CardPageUI>
        <LoadingPage />
      </CardPageUI>
    );
  }

  if (error) {
    return (
      <CardPageUI>
        {/* Replace with your actual error display component - maybe add error handling for this in the future? */}
        <div>Error: {error.message}</div>
      </CardPageUI>
    );
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
      <CreativesTableWidget data={creatives} />
    </CardPageUI>
  );
};

export default CreativeLibraryPage;
