import { FC } from "react";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import { SearchInputUI } from "src/app/ui/inputs/search-input.ui";
import CreativeLibraryTable from "./creative-library.table.widget"

const CreativeLibraryPage: FC = () => (
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
    <pre> <CreativeLibraryTable /></pre>
  </CardPageUI>
);
export default CreativeLibraryPage;
