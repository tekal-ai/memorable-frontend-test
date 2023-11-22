import { FC } from "react";

export type Route = {
  children?: Route[];
  element: FC;
  path: string;
  title: string;
  isOnlyAdmin?: boolean;
  isExcludeAdmin?: boolean;
};
