import { FC, useEffect, useState } from "react";
import { Breadcrumb as AntBreadcrumb } from "antd";
import { AppRoutes } from "src/app/app.routes";
import { getRecursivePathObjectSearch } from "./tools/deep-search-path.tool";
import { useNavigationFeature } from "src/app/features/navigation/navigation.feature";

export const BreadcrumbWidget: FC = () => {
  const [routes, setRoutes] = useState<string[]>([]);
  const { getPathName } = useNavigationFeature();

  useEffect(() => {
    const path = getRecursivePathObjectSearch(AppRoutes, "path", getPathName());
    setRoutes(path.reverse().map((a) => a.title));
  }, [location]);

  return (
    <div style={{ margin: "1rem 2rem 0rem" }}>
      <AntBreadcrumb>
        {routes.map((a, i) => (
          <AntBreadcrumb.Item key={i}>{a}</AntBreadcrumb.Item>
        ))}
      </AntBreadcrumb>
    </div>
  );
};
