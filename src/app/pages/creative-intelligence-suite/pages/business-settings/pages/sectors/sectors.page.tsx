import { Avatar, Descriptions, Divider, List, Typography  } from "antd";
import { FC } from "react";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import Sectors from "./pages/sectors/sectors"
// import AccountPage from "./pages/account/account.page";
// import BrandPage from "./pages/brands/brands.page";

const SectorsPage: FC = () => {
    const { Title } = Typography;
  return (
    <CardPageUI>
        <Title level={2}>Sectors</Title>
        <Divider />
        <Sectors />
    </CardPageUI>
  );
};
export default SectorsPage;
