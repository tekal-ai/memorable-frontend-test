import { FC } from "react";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { ButtonType, ButtonUI } from "../buttons/button.ui";

type DropDownProps = {
  icon?: React.ReactNode;
  buttonType?: ButtonType;
  onClick?: MenuProps["onClick"];
  placement?:
    | "topLeft"
    | "topCenter"
    | "topRight"
    | "bottomLeft"
    | "bottomCenter"
    | "bottomRight"
    | "top"
    | "bottom";
  buttonStyle?: React.CSSProperties;
  items: MenuProps["items"];
};

const DropdownUI: FC<DropDownProps> = ({
  children,
  icon,
  placement = "bottom",
  items,
  onClick,
  buttonStyle,
  buttonType = "text",
}) => {
  return (
    <Dropdown
      menu={{ items, onClick }}
      placement={placement}
      arrow={{ pointAtCenter: true }}
    >
      <Space>
        <ButtonUI type={buttonType} style={buttonStyle} icon={icon}>
          {children}
        </ButtonUI>
      </Space>
    </Dropdown>
  );
};
export default DropdownUI;
