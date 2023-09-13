import { FC } from "react";
import { SectorItem } from "src/domain/sectors/sectors.domain";

interface Props {
  sectors: SectorItem[];
}

const SectorsGridWidget: FC<Props> = ({ sectors }) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8">
      {sectors.map((sector) => {
        return (
          <div
            key={sector.id}
            className="w-100 flex flex-col items-center justify-center rounded-lg bg-gray-200 p-4"
          >
            <h3 className="py-4 text-center text-sm font-bold text-gray-800">
              {sector.name}
            </h3>
            <span className="text-sm text-gray-900">{sector.count}</span>
          </div>
        );
      })}
    </div>
  );
};
export default SectorsGridWidget;
