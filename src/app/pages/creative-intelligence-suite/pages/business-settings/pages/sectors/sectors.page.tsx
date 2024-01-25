import { Divider } from "antd";
import { FC } from "react";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import { SectorsListWidget } from "./sectors.list.widget";


const AccountAndBrandsPage: FC = () => {


  return (
    <CardPageUI>
      <h1>Sectors</h1>
      <Divider />
      <div style={{
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        <SectorsListWidget />
      </div>
    </CardPageUI>
  )
}

export default AccountAndBrandsPage;
