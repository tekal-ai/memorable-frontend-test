import { FC } from "react";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import { SearchInputUI } from "src/app/ui/inputs/search-input.ui";
import { Descriptions } from "antd";
import { useSessionFeature } from "src/app/features/session/session.feature";
import { EmptyCreateUI } from "src/app/ui/empty/empty-create.ui";
import { CreativesTableWidget } from "./creatives.table.widget";

//import {listFolder} from "src/graphql/client/schema"
import queryOutput from "./data/listfolderQueryOutput.mock.json";

const CreativeLibraryPage: FC = () => {
  const session = useSessionFeature();
  const { user, currentBrand } = session;

  const creatives = queryOutput.data.listFolder.creatives ?? [];
  //console.log(creatives);

  const hasCreatives = creatives?.length > 0;

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
      {/* <pre>Insert Table here</pre> */}
      <header className="mb-4 flex gap-2">
        <div className="h-4" />
        <Descriptions title="Creatives"></Descriptions>
        <div className="flex-1" />
      </header>
      {hasCreatives ? (
        <CreativesTableWidget data={creatives} />
      ) : (
        <EmptyCreateUI description="Brand doesn't have any creatives yet." />
      )}
    </CardPageUI>
  );
};
export default CreativeLibraryPage;
