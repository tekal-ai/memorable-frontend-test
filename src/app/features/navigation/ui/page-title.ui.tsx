import { FC } from "react";
import { Helmet } from "react-helmet-async";

interface PageTitleProps {
  title: string;
}
export const PageTitleUI: FC<PageTitleProps> = ({ title }) => {
  return (
    <Helmet>
      <title>Memorable | {title}</title>
    </Helmet>
  );
};
