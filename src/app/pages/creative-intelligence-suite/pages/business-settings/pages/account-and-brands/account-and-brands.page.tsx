import { Divider } from "antd";
import { FC } from "react";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import AccountPage from "./pages/account/account.page";
import BrandPage from "./pages/brands/brands.page";

const AccountAndBrandsPage: FC = () => {
  return (
    <CardPageUI>
      <AccountPage />
      <Divider />
      <BrandPage />
    </CardPageUI>
  );
};
export default AccountAndBrandsPage;
