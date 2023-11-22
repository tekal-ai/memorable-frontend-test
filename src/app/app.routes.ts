import { lazy } from "react";
import { Route } from "./features/navigation/models/route.model";
import { CreativeIntelligenceSuiteRoutes } from "./pages/creative-intelligence-suite/creative-intelligence-suite.routes";

const CreativeIntelligenceSuitePage = lazy(
  () =>
    import(
      "src/app/pages/creative-intelligence-suite/creative-intelligence-suite.page"
    ),
);

export const AppRoutes: Route[] = [
  {
    path: "/",
    element: CreativeIntelligenceSuitePage,
    children: CreativeIntelligenceSuiteRoutes,
    title: "Creative Intelligence Suite",
  },
];
