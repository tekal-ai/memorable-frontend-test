import { Descriptions } from "antd";
import { FC } from "react";
import useSWR from "swr";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import { SpinnerUI } from "src/app/features/operations/ui/spinner.ui";
import { useSectorsDomain } from "src/domain/sectors/sectors.domain";
import { SectorCardWidget } from "./sector.card.widget";

const SectorsPage: FC = () => {
  const { listSectors } = useSectorsDomain();
  const { data, isLoading } = useSWR("listSectors", listSectors);

  if (isLoading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <SpinnerUI />
      </div>
    );
  }

  return (
    <CardPageUI>
      <div className="p-10">
        <Descriptions title="Sectors" />

        {data && !isLoading && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {data?.map((item) => (
              <SectorCardWidget
                key={item.sectorId}
                name={item.name}
                count={item.count}
              />
            ))}
          </div>
        )}
      </div>
    </CardPageUI>
  );
};

export default SectorsPage;
