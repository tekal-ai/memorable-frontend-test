import { FC } from "react";
import { Descriptions } from "antd";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import { getSectorsName } from "./data/sectorsNames.mock";
import { getSectorsCount } from "./data/sectorsCounts.mock";
import { EmptyCreateUI } from "src/app/ui/empty/empty-create.ui";
import { SectorsTableWidget } from "./sectors.table.widget";

const SectorsPage: FC = () => {
  const sectorsNames = getSectorsName() ?? [];
  const sectorsCount = getSectorsCount() ?? [];

  const hasSectors = sectorsNames?.length > 0;

  const mappedData = sectorsNames.map((sectorName) => {
    const sectorCount = sectorsCount.find(
      (sectorCount) => sectorCount.id === sectorName.id,
    );

    if (sectorCount) {
      return {
        id: sectorName.id,
        name: sectorName.name,
        count: sectorCount.count,
      };
    } else {
      // Handle the case where there is no matching count for a name
      return {
        id: sectorName.id,
        name: sectorName.name,
        count: 0, // or any default value you prefer
      };
    }
  });

  return (
    <CardPageUI>
      <header className="mb-4 flex gap-2">
        <div className="h-4" />
        <Descriptions title="Sectors"></Descriptions>
        <div className="flex-1" />
      </header>
      {hasSectors ? (
        <SectorsTableWidget data={mappedData} />
      ) : (
        <EmptyCreateUI description="There are none sectors yet." />
      )}
    </CardPageUI>
  );
};
export default SectorsPage;
