import { client } from "src/app/features/repositories/clients/graphql.client";
import { CreativesRepository } from "src/domain/creatives/creatives.domain";
import { CreativeLibraryItem } from "src/graphql/client";
export class CreativeBackendRepository implements CreativesRepository {
	async getCreatives(
		currentBrandId: string | undefined,
	): Promise<CreativeLibraryItem[]> {
		return new Promise((resolve) => {
			if (!currentBrandId) {
				return resolve([]);
			}
			client.chain.query
				.listFolder({
					input: {
						brandId: currentBrandId,
					},
				})
				.get({
					creatives: {
						creativeId: 1,
						createdAt: 1,
						fileType: 1,
						name: 1,
						url: 1,
					},
				})
				.then((res) => {
					if (!res?.creatives) return resolve([]);
					return resolve(res?.creatives as CreativeLibraryItem[]);
				});
		});
	}
}