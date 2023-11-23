import { FC } from "react";
import { LoadingPage } from "src/app/features/operations/features/loadings/pages/loading.page";
import { SectorItem } from "src/graphql/client";

import { SectorCardUI } from "../ui/sector-card.ui";

const SectorsGridWidget: FC<any> = ({ data = [] }) => {
  if (!data[0]?.count) {
    return <LoadingPage />;
  }

  return (
    <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-3 lg:mt-10 lg:grid-cols-4 xl:grid-cols-6 xl:gap-x-10">
      {data.map((sector: SectorItem) => (
        <SectorCardUI sectorData={sector} key={sector.id} />
      ))}
    </div>
  );
};

export default SectorsGridWidget;
