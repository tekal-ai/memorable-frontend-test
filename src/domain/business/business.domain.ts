import { useRepositoryFeature } from "src/app/features/repositories/repositories.feature";
import { BusinessAccount } from "src/graphql/client";

export interface BusinessRepository {
  updateBusinessAccount(
    business: Partial<BusinessAccount>,
  ): Promise<BusinessAccount>;

  createBusinessAccount(
    business: Partial<BusinessAccount>,
  ): Promise<BusinessAccount>;

  getBusinessAccount(): Promise<BusinessAccount | null>;
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

  return {
    updateBusiness,
    createBusiness,
    getBusinessAccount,
  };
};
