import { client } from "src/app/features/repositories/clients/graphql.client";
import {
  SectorCounts,
  SectorNames,
} from "src/app/pages/creative-intelligence-suite/pages/business-settings/pages/sectors/sectors.page";
import { BusinessRepository } from "src/domain/business/business.domain";
import {
  BusinessAccount,
  CreateBusinessAccountInput,
} from "src/graphql/client";
import { sectorCounts, sectorNames } from "./mockData";

export class BusinessBackendRepository implements BusinessRepository {
  getSectorNames(): Promise<SectorNames> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(sectorNames);
      }, 1000);
    });
  }

  getSectorCounts(): Promise<SectorCounts> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(sectorCounts);
      }, 1000);
    });
  }
  async updateBusinessAccount(business: Partial<BusinessAccount>) {
    return client.chain.mutation
      .updateBusinessAccount({
        input: business,
      })
      .get({ id: 1 }) as Promise<BusinessAccount>;
  }

  async createBusinessAccount(business: CreateBusinessAccountInput) {
    return client.chain.mutation
      .createBusinessAccount({
        input: business,
      })
      .get({ id: 1 }) as Promise<BusinessAccount>;
  }

  async getBusinessAccount() {
    try {
      const user = await client.chain.query.getLoggedInUser.get({
        id: 1,
        businessAccount: {
          id: 1,
          address: 1,
          businessLogoUrl: 1,
          businessName: 1,
          businessPhone: 1,
          website: 1,
        },
      });
      return (user?.businessAccount as BusinessAccount) ?? null;
    } catch (err: any) {
      throw new Error(`Error retrieving business account: ${err.message}`);
    }
  }
}
