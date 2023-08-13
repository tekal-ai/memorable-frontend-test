import { FC } from "react";
import { Typography } from "antd";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import { EmptyLoaderUI } from "src/app/ui/empty/empty-loader.ui";
import { EmptyCreateUI } from "src/app/ui/empty/empty-create.ui";
import useSWR from "swr";
import { useBusinessDomain } from "src/domain/business/business.domain";
import SectorCardWidget from "./ui/sector-card.ui";

export interface SectorWithCount {
  id: number;
  name: string;
  count: number;
}

export type SectorCounts = Omit<SectorWithCount, "name">[];
export type SectorNames = Omit<SectorWithCount, "count">[];

const SectorsPage: FC = () => {
  const { getSectorsWithCounts } = useBusinessDomain();
  const { data, isLoading } = useSWR(["sectors"], getSectorsWithCounts);

  const hasSectors = data ? data.length > 0 : false;

  return (
    <CardPageUI>
      <div className="px-8 py-4">
        <header>
          <Typography.Title className="pb-4" level={3}>
            Sectors
          </Typography.Title>
        </header>
        <EmptyLoaderUI isLoading={isLoading}>
          {hasSectors ? (
            <div className="flex flex-wrap gap-8">
              {data?.map((sector) => (
                <SectorCardWidget
                  key={sector.id}
                  name={sector.name}
                  count={sector.count}
                />
              ))}
            </div>
          ) : (
            <EmptyCreateUI
              description={isLoading ? "Loading sectors" : "No sectors"}
            />
          )}
        </EmptyLoaderUI>
      </div>
    </CardPageUI>
  );
};
export default SectorsPage;
