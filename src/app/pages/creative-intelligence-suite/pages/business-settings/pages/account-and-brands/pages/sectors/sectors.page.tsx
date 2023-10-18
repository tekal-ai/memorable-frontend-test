import { FC, useEffect, useState } from "react";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import { useSectorsDomain } from "src/domain/sectors/sectors.domain";
import { EmptyCreateUI } from "src/app/ui/empty/empty-create.ui";
import PageHeader from "src/app/ui/header/header.ui";
import { SectorWidget } from "./sectors.widget";
import { LoadingPage } from "src/app/features/operations/features/loadings/pages/loading.page";

const SectorsPage: FC = () => {
  const { getSectors } = useSectorsDomain();
  const sectors = getSectors();
  const isLoading = useMockLoading();

  return (
    <CardPageUI>
      <PageHeader title="Sectors" />
      {isLoading && <LoadingPage />}
      {!isLoading && sectors.length ? (
        <SectorsContainer>
          {sectors.map((sector) => (
            <SectorWidget sector={sector} key={sector.sectorId.toString()} />
          ))}
        </SectorsContainer>
      ) : (
        !isLoading && <EmptyCreateUI description="There are no sectors." />
      )}
    </CardPageUI>
  );
};

export default SectorsPage;

const SectorsContainer: FC = ({ children }) => {
  return <div style={{ display: "flex", flexWrap: "wrap" }}>{children}</div>;
};

const useMockLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return isLoading;
};
