import { ColumnsType } from "antd/es/table";
import { FC } from "react";
import { TableUI } from "src/app/ui/tables/table.ui";
import { useSectorsDomain } from "src/domain/sectors/sectors.domain";
import { Sector, SectorItem } from "src/graphql/client";

interface SectorsTableWidgetProps {
  currentBrandSectors?: Sector[];
  data?: SectorItem[];
}

export const SectorsTableWidget: FC<SectorsTableWidgetProps> = ({
  currentBrandSectors = [],
  data = [],
}) => {
  const { isSectorOnBrand } = useSectorsDomain();
  const generateSectorKey = (sector: SectorItem) => ({
    ...sector,
    key: sector.id,
  });

  const columns: ColumnsType<SectorItem> = [
    {
      title: "Name",
      dataIndex: "name",
      render: (name, record) => {
        return (
          <div className="flex items-center">
            <div>{record.name}</div>
          </div>
        );
      },
    },
    {
      title: "Is applied to current brand",
      dataIndex: "fileType",
      render: (name, record) => {
        return (
          <div className="flex items-center">
            <div>
              {isSectorOnBrand(record, currentBrandSectors) ? (
                <span role="img" aria-label="sheep">
                  ✅
                </span>
              ) : null}
            </div>
          </div>
        );
      },
    },
  ];

  return <TableUI columns={columns} data={data.map(generateSectorKey)} />;
};
