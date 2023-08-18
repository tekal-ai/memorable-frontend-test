import { client } from "src/app/features/repositories/clients/graphql.client";
import { BusinessRepository } from "src/domain/business/business.domain";
import {
  BusinessAccount,
  CreateBusinessAccountInput,
  CreativeLibraryFilter,
  CreativeLibraryItemRequest,
} from "src/graphql/client";

export class BusinessBackendRepository implements BusinessRepository {
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

  async getListFolder(brandId: string): Promise<any> {
    try {
      const cretive: CreativeLibraryFilter = {
        brandId: brandId,
      };
      const creative: CreativeLibraryItemRequest = {
        fileType: 1,
        updatedAt: 1,
        name: 1,
        url: 1,
      };

      const user = await client.chain.query.listFolder({ input: cretive }).get({
        __typename: 1,
        updatedAt: 1,
        creatives: creative,
      });
      return (user && user.creatives) || null;
    } catch (err: any) {
      throw new Error(`Error retrieving business account: ${err.message}`);
    }
  }
}
