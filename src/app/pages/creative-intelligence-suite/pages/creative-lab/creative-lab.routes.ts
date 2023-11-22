import { lazy } from "react";
import { Route } from "src/app/features/navigation/models/route.model";

const CreativeLibraryPage = lazy(
  () =>
    import(
      "src/app/pages/creative-intelligence-suite/pages/creative-lab/pages/creative-library/creative-library.page"
    ),
);

export const CreativeLabRoutes: Route[] = [
  {
    path: "/library",
    element: CreativeLibraryPage,
    title: "Library",
  },
];
