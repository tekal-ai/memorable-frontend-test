import { useRepositoryFeature } from "src/app/features/repositories/repositories.feature";
import { SectorCount, SectorItem, SectorName } from "src/graphql/client";

export interface SectorsRepository {
  getSectorsName: () => Promise<SectorName[]>;
  getSectorsCount: () => Promise<SectorCount[]>;
}

export const useSectorsDomain = (repoId = "SectorsRepository") => {
  const { repository } = useRepositoryFeature<SectorsRepository>(repoId);

  const listSectors = async (): Promise<SectorItem[]> => {
    const sectorsCounts = await repository.getSectorsCount();
    const sectorsNames = await repository.getSectorsName();

    const sectorNameMap = new Map<number, string>();

    sectorsNames.forEach((sector) => {
      sectorNameMap.set(sector.id, sector.name);
    });

    const sectors = sectorsCounts.map((sectorCount) => ({
      sectorId: sectorCount.id,
      count: sectorCount.count,
      name: sectorNameMap.get(sectorCount.id),
    }));

    return sectors as SectorItem[];
  };

  return {
    listSectors,
  };
};
