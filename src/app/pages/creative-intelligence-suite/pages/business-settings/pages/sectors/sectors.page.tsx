import { FC, useEffect, useState } from "react";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import { SectorItem } from "src/graphql/client";

import { sectorsCount, sectorsNames } from "../../../../../../features/mocks/sectors.mock";
import SectorsGridWidget from "./widgets/sectors.grid.widget";

const SectorsPage: FC = () => {
  const [sectorData, setSectorData] = useState<SectorItem[]>([]);

  const fakeSectorRequest = (respData: SectorItem[], delay: number) => {
    return new Promise<SectorItem[]>((resolve) => {
      setTimeout(() => {
        resolve(respData);
      }, delay);
    });
  };

  useEffect(() => {
    const updateSectorData = (resp: SectorItem[], key: keyof SectorItem) => {
      setSectorData((prev) =>
        !prev.length
          ? resp
          : prev.map((item) => ({
              ...item,
              [key]: resp.find((i) => i.id === item.id)?.[key],
            })),
      );
    };

    fakeSectorRequest(sectorsNames, 500).then((resp) => {
      updateSectorData(resp, "name");
    });

    fakeSectorRequest(sectorsCount, 500).then((resp) => {
      updateSectorData(resp, "count");
    });
  }, []);

  return (
    <CardPageUI>
      <div className="p-4">
        <h3 className="text-2xl font-bold">Sectors</h3>
        <SectorsGridWidget data={sectorData} />
      </div>
    </CardPageUI>
  );
};

export default SectorsPage;
