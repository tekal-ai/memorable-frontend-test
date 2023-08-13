import { FC } from "react";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import CreativesPage from "./pages/creatives.page";

const CreativeLibraryPage: FC = () => {
  return (
    <CardPageUI>
      <CreativesPage />
    </CardPageUI>
  );
};
export default CreativeLibraryPage;
