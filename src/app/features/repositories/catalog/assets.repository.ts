import { AssetsRepository } from "src/domain/assets/assets.domain";
import {
  AssetChecks,
  BrandAssetsInput,
  IntegrationsAssets,
} from "src/graphql/client";
import { client } from "../clients/graphql.client";

export class AssetsBackendRepository implements AssetsRepository {
  async updateBrandAssets(args: { assets: BrandAssetsInput; brandId: string }) {
    return client.chain.mutation
      .updateBrandAssets({
        input: args.assets,
        brandId: args.brandId,
      })
      .get({
        unrelatedSocialAccountId: 1,
      }) as Promise<AssetChecks>;
  }
  async getAssets() {
    return client.chain.query.getBusinessAccountAssets.get({
      adAccounts: {
        id: 1,
        name: 1,
        type: 1,
        platform: 1,
      },
      socialAccounts: {
        id: 1,
        name: 1,
        type: 1,
        platform: 1,
      },
    }) as Promise<IntegrationsAssets>;
  }
}
