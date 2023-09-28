import { useRepositoryFeature } from "src/app/features/repositories/repositories.feature";
import { SectorCount, SectorItem, SectorName } from "src/graphql/client";

export interface SectorsRepository {
  getSectorsNames(): SectorName[];
  getSectorsCount(): SectorCount[];
}

export const useSectorsDomain = (repoId = "SectorsRepository") => {
  const { repository } = useRepositoryFeature<SectorsRepository>(repoId);

  const getSectors = (): SectorItem[] => {
    const sectorsNames = repository.getSectorsNames();
    const sectorsCount = repository.getSectorsCount();
    const sectors: SectorItem[] = [];
    sectorsNames.forEach((sectorName) => {
      const sector = sectorsCount.find((c) => c.id == sectorName.id);
      sectors.push({
        name: sectorName.name,
        sectorId: sectorName.id,
        count: sector?.count || 0,
      });
    });
    return sectors;
  };

  return {
    getSectors,
  };
};
