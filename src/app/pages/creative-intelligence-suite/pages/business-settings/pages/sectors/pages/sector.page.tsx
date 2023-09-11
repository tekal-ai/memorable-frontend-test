import { FC, useState, useEffect } from "react";
import { SectorDataItem } from "src/graphql/client";
import SectorGridWidget from "./sector.grid.widget";
import { sectorsNames, transformedArray } from "../data/temp-data";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin, Button } from "antd";
import { EmptyCreateUI } from "src/app/ui/empty/empty-create.ui";

const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;

const SectorPage: FC = () => {
  const [sectorsData, setSectorsData] = useState<SectorDataItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [itemsToShow, setItemsToShow] = useState(15); // Number of items to show initially
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      const mergedResponsesArray = sectorsNames.map((sectorName) => {
        const { id } = sectorName;
        const matchingCount = transformedArray.find((item) => item.id === id);
        return {
          ...sectorName,
          numCount: matchingCount ? matchingCount.count : 0,
        };
      });

      setTimeout(() => {
        setSectorsData(mergedResponsesArray);
        setIsLoading(false);
      }, 1000);
    };

    fetchData();
  }, []);

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setItemsToShow(itemsToShow + 15); // Increase the number of items to show by 15
      setLoadMore(true);
      setIsLoading(false);
    }, 300);
  };

  const visibleSectors = sectorsData?.slice(0, itemsToShow);
  const hasSectors = sectorsData?.length > 0;

  return (
    <div>
      <div>
        {isLoading ? (
          <div className="w-100 flex items-center justify-center">
            <Spin indicator={antIcon} />
          </div>
        ) : (
          <>
            {hasSectors ? (
              <>
                <SectorGridWidget sectorsData={visibleSectors} />
                {!loadMore && itemsToShow < sectorsData.length ? (
                  <div className="w-100 mt-5 flex items-center justify-center">
                    <Button onClick={handleLoadMore}>Load More</Button>
                  </div>
                ) : null}
              </>
            ) : (
              <EmptyCreateUI description="You don't have any sectors yet." />
            )}
          </>
        )}
      </div>
    </div>
  );
};
export default SectorPage;
