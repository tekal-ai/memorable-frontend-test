import { FC, useEffect } from "react";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import { Descriptions } from "antd";
import { SectorWidget } from "src/app/pages/creative-intelligence-suite/pages/business-settings/pages/sectors/sector.widget";
import { useSectorsDomain } from "src/domain/sectors/sectors.domain";
import { EmptyCreateUI } from "src/app/ui/empty/empty-create.ui";
import { LoadingPage } from "src/app/features/operations/features/loadings/pages/loading.page";
import { useSessionFeature } from "src/app/features/session/session.feature";

const SectorsPage: FC = () => {
  const { getSectors } = useSectorsDomain();

  /* Simulate showing a spinner */
  const { isLoading, setIsLoading } = useSessionFeature();
  function clearLoading(): void {
    setIsLoading(false);
  }
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      clearLoading();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const sectors = getSectors();

  if (!sectors) return <></>;
  if (sectors?.length == 0)
    return <EmptyCreateUI description="There are no sectors." />;

  const rows: Array<any> = [];
  for (let i = 0; i < sectors.length; i++) {
    rows.push(<SectorWidget sector={sectors[i]} key={sectors[i].sectorId} />);
  }

  return (
    <CardPageUI>
      <div>
        <header className="mb-4 flex gap-2">
          <div className="h-4" />
          <Descriptions title="Sectors"></Descriptions>
          <div className="flex-1" />
        </header>
      </div>
      {isLoading ? <LoadingPage /> : rows}
    </CardPageUI>
  );
};
export default SectorsPage;
