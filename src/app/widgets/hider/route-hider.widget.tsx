import { FC } from "react";
import { useNavigationFeature } from "src/app/features/navigation/navigation.feature";

interface RouteHiderProps {
  routes: Array<string>;

}
const checkRoute = (currentPathName: string, routes: Array<string>) => {
  return routes.some((r) => r === currentPathName)

}
export const RouteHiderWidget: FC<RouteHiderProps> = ({ children, routes }) => {
  const { getPathName } = useNavigationFeature();

  if (checkRoute(getPathName(), routes)) return <></>;

  return <div className="animFadeIn">{children}</div>;
};
