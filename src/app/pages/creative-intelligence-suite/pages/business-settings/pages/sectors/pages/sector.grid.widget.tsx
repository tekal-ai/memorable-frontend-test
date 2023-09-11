import { FC } from "react";
import { SectorDataItem } from "src/graphql/client";
import CardSectorUI from "src/app/ui/cards/card-sector.ui";

interface SectorsData {
  sectorsData: SectorDataItem[];
}

const SectorGridWidget: FC<SectorsData> = ({ sectorsData }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
      {sectorsData.map((sectorItem) => {
        return (
          <CardSectorUI
            key={sectorItem.id}
            name={sectorItem.name}
            numCount={sectorItem.numCount}
            className="w-100 flex flex-col items-center justify-center rounded-lg bg-gray-100 p-4"
          />
        );
      })}
    </div>
  );
};
export default SectorGridWidget;
