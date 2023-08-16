import { FC, useEffect, useState } from "react";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import SectorsGridWidget from "./widgets/sectors.grid.widget";
import { sectorsNames, transformedArray } from "./temp-data";
import { SectorDataItem } from "src/graphql/client";

const SectorsPage: FC = () => {
  const [sectorData, setSectorData] = useState<SectorDataItem[]>([]);

  const fakeSectorRequest = (respData: SectorDataItem[], delay: number) => {
    return new Promise<SectorDataItem[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(respData);
      }, delay);
    });
  };

  // Make fake requests to each endpoint on mount and set the sectorData
  useEffect(() => {
    fakeSectorRequest(sectorsNames, 100).then((resp) => {
      setSectorData((prev) =>
        !prev.length
          ? resp
          : prev.map((item) => ({
              ...item,
              name: resp.find((i) => i.id === item.id)?.name,
            })),
      );
    });

    fakeSectorRequest(transformedArray, 1100).then((resp) => {
      setSectorData((prev) =>
        !prev.length
          ? resp
          : prev.map((item) => ({
              ...item,
              count: resp.find((i) => i.id === item.id)?.count,
            })),
      );
    });
  }, []);

  return (
    <CardPageUI>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Sectors</h1>
        <SectorsGridWidget data={sectorData} />
      </div>
    </CardPageUI>
  );
};
export default SectorsPage;
