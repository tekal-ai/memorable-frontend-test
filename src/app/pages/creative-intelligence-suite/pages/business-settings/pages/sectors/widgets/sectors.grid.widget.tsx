import { FC } from "react";
import { SectorCardUI } from "../ui/sector-card.ui";
import { SectorDataItem } from "src/graphql/client";
import { Spin } from "antd";

const SectorsGridWidget: FC<any> = ({ data = [] }) => {
  return data.length && data[0]?.name && data[0]?.count ? (
    <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-3 lg:mt-10 lg:grid-cols-5 xl:grid-cols-6 xl:gap-x-10">
      {data.map((sector: SectorDataItem) => {
        return <SectorCardUI sectorData={sector} />;
      })}
    </div>
  ) : (
    <Spin size="large" className="mt-6" />
  );
};
export default SectorsGridWidget;
