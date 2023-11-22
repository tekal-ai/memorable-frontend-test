import React, { FC, InputHTMLAttributes } from "react";
import { Input } from "antd";

interface InputUIProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
}

export const InputUI: FC<InputUIProps> = (props) => {
  const { icon } = props;
  return (
    <div>
      <Input {...(props as any)} prefix={icon ?? null} />
    </div>
  );
};
