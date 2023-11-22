import { FC } from "react";
import { useNavigationFeature } from "src/app/features/navigation/navigation.feature";

interface RouteHiderProps {
  route: string;
}

export const RouteHiderWidget: FC<RouteHiderProps> = ({ children, route }) => {
  const { getPathName } = useNavigationFeature();

  if (getPathName() === route) return <></>;

  return <div className="animFadeIn">{children}</div>;
};
