import { useRepositoryFeature } from "src/app/features/repositories/repositories.feature";

export interface SectorsRepository {
  getSectors(): Promise<any[]>;
  getSectorsName(): Promise<any[]>;
  getSectorsCount(): Promise<any[]>;
}

export const useSectorsDomain = (repoId = "SectorsRepository") => {
  const { repository } = useRepositoryFeature<SectorsRepository>(repoId);

  const getSectorsName = () => {
    return repository.getSectorsName();
  };

  const getSectors = () => {
    return repository.getSectors();
  };

  const getSectorsCount = () => {
    return repository.getSectorsCount();
  };

  return {
    getSectors,
    getSectorsName,
    getSectorsCount,
  };
};
