import { FC } from "react";
import { useCurrentBrandCreatives } from "src/app/features/creatives/creatives.feature";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import { SearchInputUI } from "src/app/ui/inputs/search-input.ui";
import { TableUI } from "src/app/ui/tables/table.ui";

const CreativeLibraryPage: FC = () => {
  useCurrentBrandCreatives();

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
      <TableUI columns={[]} data={[]} />
    </CardPageUI>
  );
};
export default CreativeLibraryPage;
