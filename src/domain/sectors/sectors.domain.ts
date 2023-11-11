import { useRepositoryFeature } from "src/app/features/repositories/repositories.feature";

export interface SectorsCounts{
    id: number;
    count:number;
}

export interface SectorsNames{
    id: number;
    name:string;
}

export interface SectorsRepository {
    getSectorsName(): Promise<SectorsNames[]>;
    getSectorsCount(): Promise<SectorsCounts[]>;
}

export const useSectorsDomain = (repoId = "SectorsBackendRepository") => {
  const { repository } = useRepositoryFeature<SectorsRepository>(repoId);

  const getSectorsName = () => {
    return repository.getSectorsName();
  };

  const getSectorsCount = () => {
    return repository.getSectorsCount();
  };

  return {
    getSectorsName,
    getSectorsCount
  };
};
