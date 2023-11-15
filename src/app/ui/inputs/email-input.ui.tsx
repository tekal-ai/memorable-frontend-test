import { Input } from "antd";
import { FC } from "react";

export const EmailInputUI: FC = () => {
  return (
    <div>
      <Input placeholder="abdc@email.com" prefix={<></>} />
    </div>
  );
};
