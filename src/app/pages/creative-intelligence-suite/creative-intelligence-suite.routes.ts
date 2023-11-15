import { Route } from "src/app/features/navigation/models/route.model";
import { BusinessSettingsRoutes } from "./pages/business-settings/business-settings.routes";
import { CreativeLabRoutes } from "./pages/creative-lab/creative-lab.routes";

export const CreativeIntelligenceSuiteRoutes: Route[] = [
  ...BusinessSettingsRoutes,
  ...CreativeLabRoutes,
];

export const ROOT_DEFAULT_ROUTE = "/library";
