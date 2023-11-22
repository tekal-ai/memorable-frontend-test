import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ReactNode, Suspense, StrictMode } from "react";
import { SWRConfig, SWRConfiguration } from "swr";

import { LoadingPage } from "./app/features/operations/features/loadings/pages/loading.page";
import ErrorBoundaries from "./app/features/operations/features/errors/components/error-boundaries.component";
import ErrorsPage from "./app/features/operations/features/errors/pages/error.page";

const swrConfig: SWRConfiguration = {
  suspense: false,
  revalidateOnFocus: false,
};

export const Providers = ({ children }: { children: ReactNode }) => (
  <StrictMode>
    <ErrorBoundaries fallback={<ErrorsPage />}>
      <Suspense fallback={<LoadingPage />}>
        <BrowserRouter>
          <HelmetProvider>
            <SWRConfig value={{ ...swrConfig, provider: () => new Map() }}>
              {children}
            </SWRConfig>
          </HelmetProvider>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundaries>
  </StrictMode>
);
