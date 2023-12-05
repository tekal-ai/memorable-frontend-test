import { FC } from "react";
import { Link } from "react-router-dom";
import { RouteHiderWidget } from "src/app/widgets/hider/route-hider.widget";
import { BrandSelectorWidget } from "./widgets/brand-selector.widget";
import { CredentialsPanelWidget } from "./widgets/credentials-panel.widget";
import { LogoUI } from "../../../../../domain/brand/logo.ui";
import { ROOT_DEFAULT_ROUTE } from "../../creative-intelligence-suite.routes";

export const HeaderWidget: FC = () => {
  return (
    <div
      className="animSlideTopIn flex items-center gap-4 border-b border-gray-200 bg-white"
      style={{ padding: "1.5rem 2rem" }}
    >
      <Link to={ROOT_DEFAULT_ROUTE}>
        <LogoUI style={{ height: "34px" }} />
      </Link>

      <div className="flex-1" />
      <RouteHiderWidget routes={["/business-settings/account-and-brands", "/business-settings/sectors"]}>
        <BrandSelectorWidget />
      </RouteHiderWidget>
      <CredentialsPanelWidget />
    </div>
  );
};
