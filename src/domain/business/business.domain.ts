import { useRepositoryFeature } from "src/app/features/repositories/repositories.feature";
import {
  SectorCounts,
  SectorNames,
  SectorWithCount,
} from "src/app/pages/creative-intelligence-suite/pages/business-settings/pages/sectors/sectors.page";
import { BusinessAccount } from "src/graphql/client";

export interface BusinessRepository {
  updateBusinessAccount(
    business: Partial<BusinessAccount>,
  ): Promise<BusinessAccount>;

  createBusinessAccount(
    business: Partial<BusinessAccount>,
  ): Promise<BusinessAccount>;

  getBusinessAccount(): Promise<BusinessAccount | null>;

  getSectorNames(): Promise<SectorNames>;
  getSectorCounts(): Promise<SectorCounts>;
}

export const useBusinessDomain = (repoId = "BusinessRepository") => {
  const { repository } = useRepositoryFeature<BusinessRepository>(repoId);

  const updateBusiness = (business: Partial<BusinessAccount>) => {
    return repository.updateBusinessAccount(business);
  };

  const createBusiness = (business: Partial<BusinessAccount>) => {
    return repository.createBusinessAccount(business);
  };

  const getBusinessAccount = () => {
    return repository.getBusinessAccount();
  };

  const getSectorsWithCounts = async () => {
    const [sectorNames, sectorCounts] = await Promise.all([
      repository.getSectorNames(),
      repository.getSectorCounts(),
    ]);

    return sectorNames.reduce((acc, sector) => {
      const count = sectorCounts.find((c) => c.id === sector.id)?.count ?? 0;
      acc.push({ ...sector, count });
      return acc;
    }, [] as SectorWithCount[]);
  };

  return {
    updateBusiness,
    createBusiness,
    getBusinessAccount,
    getSectorsWithCounts,
  };
};
