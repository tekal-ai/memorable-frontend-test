import classNames from "classnames";
import { FC } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Route } from "src/app/features/navigation/models/route.model";
import { BusinessSettingsRoutes } from "../../pages/business-settings/business-settings.routes";
import MenuUI from "./ui/menu.ui";
import { SettingOutlined, BulbOutlined } from "@ant-design/icons";
import { ItemType } from "antd/es/menu/hooks/useItems";
import { CreativeLabRoutes } from "../../pages/creative-lab/creative-lab.routes";

export const NavbarWidget: FC = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const onlyStaticRoutes = (route: Route) => {
    if (route.path === "/creative-analitycs/content") return false;
    return !route.path.includes(":");
  };

  const itemMapper = (route: Route) => {
    return {
      key: route.path,
      label: route.title,
    };
  };

  const items: ItemType[] = [
    {
      key: "1",
      icon: <BulbOutlined rev={undefined} />,
      children: CreativeLabRoutes.filter(onlyStaticRoutes).map(itemMapper),
      label: "Creative Lab",
    },
    {
      key: "2",
      icon: <SettingOutlined rev={undefined} />,
      children: BusinessSettingsRoutes.filter(onlyStaticRoutes).map(itemMapper),
      label: "Business Settings",
    },
  ];

  const getAllItemKeys = (items: ItemType[]): string[] => {
    return items.map((i) => String(i?.key));
  };

  return (
    <div
      style={{ padding: "0rem", display: "flex", flexDirection: "column" }}
      className={classNames("animSlideLeftIn", "transition-all duration-500")}
    >
      <MenuUI
        onSelect={(path: string) => navigate(path)}
        defaultSelectedKeys={[location.pathname]}
        defaultOpenKeys={getAllItemKeys(items)}
        items={items}
      />
    </div>
  );
};
