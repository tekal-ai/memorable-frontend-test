import { useRepositoryFeature } from "src/app/features/repositories/repositories.feature";

export type SectorItem = {
  id: number;
  name: string;
  count: number;
};

export interface SectorsRepository {
  getSectors(): Promise<any>;
}

export const useSectorsDomain = (repoId = "SectorsRepository") => {
  const { repository } = useRepositoryFeature<SectorsRepository>(repoId);

  const getSectors = () => {
    return repository.getSectors();
  };

  return { getSectors };
};
