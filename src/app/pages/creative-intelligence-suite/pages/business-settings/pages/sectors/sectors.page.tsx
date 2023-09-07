import { FC } from "react";
import useSWR from "swr";
import { Descriptions } from "antd";

import { useSectorsDomain } from "src/domain/sectors/sectors.domain";
import { EmptyCreateUI } from "src/app/ui/empty/empty-create.ui";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import { SpinnerUI } from "src/app/features/operations/ui/spinner.ui";
import { SectorsGridWidget } from "./sectors.grid.widget";

const SectorsPage: FC = () => {
  const { getSectors } = useSectorsDomain();
  const { data: sectors } = useSWR("gettingSectors", getSectors);

  if (!sectors) {
    return (
      <div className="flex h-40 items-center justify-center">
        <SpinnerUI size="large" />
      </div>
    );
  }

  const hasSectors = sectors.length > 0;

  return (
    <CardPageUI>
      <header className="mb-4 flex gap-2">
        <div className="h-4" />
        <Descriptions title="Sectors"></Descriptions>
        <div className="flex-1" />
      </header>
      {hasSectors ? (
        <SectorsGridWidget data={sectors} />
      ) : (
        <EmptyCreateUI description="You don't have any sectors yet." />
      )}
    </CardPageUI>
  );
};
export default SectorsPage;
