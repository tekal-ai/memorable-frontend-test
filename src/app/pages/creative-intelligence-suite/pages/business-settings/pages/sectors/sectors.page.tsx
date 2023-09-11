import { FC } from "react";
import { Descriptions } from "antd";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import SectorPage from "./pages/sector.page";

const AccountAndBrandsPage: FC = () => {
  return (
    <CardPageUI>
      <header className="mb-4 flex gap-2">
        <div className="h-4" />
        <Descriptions title="Sectors"></Descriptions>
        <div className="flex-1" />
      </header>
      <SectorPage />
    </CardPageUI>
  );
};
export default AccountAndBrandsPage;
