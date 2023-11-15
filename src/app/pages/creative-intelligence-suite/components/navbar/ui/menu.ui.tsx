import { FC } from "react";
import { Menu, MenuProps } from "antd";
import { ItemType } from "antd/es/menu/hooks/useItems";

interface MenuUIProps {
  items: ItemType[];
  defaultSelectedKeys: string[];
  defaultOpenKeys: string[];
  onSelect: (key: string) => void;
}

const MenuUI: FC<MenuUIProps> = ({
  items = [],
  onSelect,
  defaultOpenKeys,
  defaultSelectedKeys,
}) => {
  const onClick: MenuProps["onClick"] = (e) => {
    onSelect(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={defaultSelectedKeys}
      selectedKeys={defaultSelectedKeys}
      defaultOpenKeys={defaultOpenKeys}
      mode="inline"
      items={items}
    />
  );
};
export default MenuUI;
