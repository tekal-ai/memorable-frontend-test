import { lazy } from "react";
import { Route } from "src/app/features/navigation/models/route.model";

const CreativeLibraryPage = lazy(
  () =>
    import(
      "src/app/pages/creative-intelligence-suite/pages/creative-lab/pages/creative-library/creative-library.page"
    ),
);

const SectorsPage = lazy(
  () =>
    import(
      "src/app/pages/creative-intelligence-suite/pages/creative-lab/pages/sectors/sectors.page"
    ),
);

export const CreativeLabRoutes: Route[] = [
  {
    path: "/library",
    element: CreativeLibraryPage,
    title: "Library",
  },
  {
    path: "/sectors",
    element: SectorsPage,
    title: "Sectors",
  },
];
