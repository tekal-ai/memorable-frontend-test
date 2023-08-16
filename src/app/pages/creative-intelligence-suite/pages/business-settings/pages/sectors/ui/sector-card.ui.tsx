import { FC } from "react";
import { SectorDataItem } from "src/graphql/client";

export const SectorCardUI: FC<{ sectorData: SectorDataItem }> = ({
  sectorData,
}) => {
  return (
    <div className="text-bold flex flex-col items-center justify-center gap-4 bg-[#ececec] p-6">
      <p className="text-md text-center font-bold">{sectorData?.name}</p>
      <p className="text-lg">{sectorData?.count}</p>
    </div>
  );
};
