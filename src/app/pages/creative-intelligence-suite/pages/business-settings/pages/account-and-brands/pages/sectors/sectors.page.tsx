import { FC, useEffect, useState } from "react";
import { Descriptions } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import SECTORS_NAMES from './mocks/sectors-backend-names';
import SECTORS_COUNTS from './mocks/sectors-backend-counts';

type IMockNameItem = { 
  id: number;
  name: string;
} 

type IMockCountItem = { 
  id: number;
  count: number;
} 

type ISectorsData = { 
  id: number;
  name: string;
  count: number;
} 

const SectorsPage: FC = () => {
  const [sectors, setSectors] = useState<ISectorsData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      const countMap = new Map(SECTORS_COUNTS.map((item: IMockCountItem) => [item.id, item.count]));
      const combinedSectors = SECTORS_NAMES.map((item: IMockNameItem) => ({
        ...item,
        count: countMap.get(item.id) || 0
      }));

      setSectors([...combinedSectors]);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <CardPageUI>
      <header className="mb-4 flex gap-2">
        <div className="h-4" />
        <Descriptions title="Sectors"></Descriptions>
        <div className="flex-1" />
      </header>

      {loading ? 
        <div className="flex justify-center items-center h-screen">
          <LoadingOutlined className="text-[52px]" spin />
        </div>
      : 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {sectors.map(sector => (
            <div key={sector.id} className="flex flex-col bg-gray-100 p-4 rounded-md items-center">
              <h2 className="text-lg font-semibold text-center mb-2">{sector.name}</h2>
              <p>{sector.count}</p>
            </div>
          ))}
        </div>
      }
    </CardPageUI>
  );
};
export default SectorsPage;
