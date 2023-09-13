import { FC, useEffect, useState } from "react";
import { Descriptions } from "antd";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import { EmptyCreateUI } from "src/app/ui/empty/empty-create.ui";
import { EmptyLoaderUI } from "src/app/ui/empty/empty-loader.ui";
import {
  SectorItem,
  useSectorsDomain,
} from "src/domain/sectors/sectors.domain";
import SectorsGridWidget from "./sectors.grid.widget";

const SectorsPage: FC = () => {
  const [sectors, setSectors] = useState<SectorItem[]>([]);
  const [loading, setLoading] = useState(false);
  const { getSectors } = useSectorsDomain();

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await getSectors();
        setSectors(response);
      } catch (err) {
        throw new Error(`Error getting sectors: ${err}`);
      }
      setLoading(false);
    })();
  }, []);

  return (
    <CardPageUI>
      <header className="mb-4 flex gap-2">
        <div className="h-4" />
        <Descriptions title="Sectors"></Descriptions>
        <div className="flex-1" />
      </header>
      <div>
        {loading && <EmptyLoaderUI isLoading />}
        <>
          {sectors.length ? (
            <>
              <SectorsGridWidget sectors={sectors} />
            </>
          ) : (
            <EmptyCreateUI description="You don't have any sectors yet." />
          )}
        </>
      </div>
    </CardPageUI>
  );
};
export default SectorsPage;
