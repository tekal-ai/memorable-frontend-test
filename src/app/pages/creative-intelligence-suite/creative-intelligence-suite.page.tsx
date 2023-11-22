import { FC, Suspense } from "react";

import { Navigate, Outlet } from "react-router-dom";
import { HeaderWidget } from "./components/header/header.widget";
import { NavbarWidget } from "./components/navbar/navbar.widget";
import { LoadingPage } from "src/app/features/operations/features/loadings/pages/loading.page";
import { useSessionFeature } from "src/app/features/session/session.feature";
import { useNavigationFeature } from "src/app/features/navigation/navigation.feature";
import { ROOT_DEFAULT_ROUTE } from "./creative-intelligence-suite.routes";

const CreativeIntelligenceSuitePage: FC = () => {
  const { user } = useSessionFeature();
  const { isRoot } = useNavigationFeature();

  if (user === undefined) {
    return <LoadingPage />;
  }

  if (isRoot()) {
    return <Navigate to={ROOT_DEFAULT_ROUTE} />;
  }

  if (!user) {
    return (
      <Navigate
        to="/login"
        state={{ from: location.pathname + location.search }}
      />
    );
  }

  return (
    <div className="flex h-full w-full flex-col">
      <HeaderWidget />
      <div className="flex h-full overflow-hidden">
        <NavbarWidget />
        <main className="flex h-full flex-1 flex-col overflow-hidden">
          <Suspense fallback={<LoadingPage />}>
            <div className="viewport h-full w-full overflow-auto">
              <Outlet />
            </div>
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default CreativeIntelligenceSuitePage;
