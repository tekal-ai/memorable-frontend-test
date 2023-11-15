import { FC } from "react";
import { ArrowUpOutlined } from "@ant-design/icons";
import { ScrollTopWidget } from "./scroll-top.widget";

export const ScrollTopButtonWidget: FC = () => {
  return (
    <ScrollTopWidget>
      <ArrowUpOutlined /> Scroll top
    </ScrollTopWidget>
  );
};
