import React, { FC } from "react";
import { Button, Tooltip } from "antd";
import { SizeType } from "antd/es/config-provider/SizeContext";

export type ButtonType =
  | "text"
  | "link"
  // TODO. Checkk if "ghost" should be a valid type.
  // | "ghost"
  | "default"
  | "primary"
  | "light"
  | "dashed";

export type ButtonUIProps = {
  icon?: React.ReactNode;
  type?: ButtonType;
  size?: SizeType;
  className?: string;
  title?: string | React.ReactNode;
  block?: boolean;
  style?: React.CSSProperties;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
};

export const ButtonUI: FC<ButtonUIProps> = ({
  children,
  icon,
  block,
  className,
  onClick,
  title,
  style,
  size,
  type = "primary",
  isLoading,
  isDisabled,
}) => {
  const getButtonType = (type: ButtonType) => {
    if (type === "light") return "text";
    return type;
  };

  return (
    <Tooltip title={title}>
      <Button
        className={className}
        onClick={onClick}
        size={size}
        block={block}
        style={{
          background:
            type === "light"
              ? "rgba(0, 0, 0, 0.06)"
              : type === "text"
              ? ""
              : "#1c1c1ce4",
          ...style,
        }}
        disabled={isDisabled}
        loading={isLoading}
        type={getButtonType(type)}
        icon={icon}
      >
        {children}
      </Button>
    </Tooltip>
  );
};
