import { FC } from "react";
import { Descriptions } from "antd";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import { SearchInputUI } from "src/app/ui/inputs/search-input.ui";
import LibraryPage from "./pages/library/library.page";

const CreativeLibraryPage: FC = () => {
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
        <Descriptions title="Library"></Descriptions>
        <SearchInputUI />
      </header>
      <div>
        <LibraryPage />
      </div>
    </CardPageUI>
  );
};
export default CreativeLibraryPage;
