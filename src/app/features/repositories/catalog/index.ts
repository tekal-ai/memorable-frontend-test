import { BrandBackendRepository } from "./brand.repository";
import { UsersBackendRepository } from "./users.repository";
import { AssetsBackendRepository } from "./assets.repository";
import { BusinessBackendRepository } from "./business.repository";
import { EarlyAccessBackendRepository } from "./early-access.repository";

export const repository = new Map();

repository.set("BrandRepository", BrandBackendRepository);
repository.set("UsersRepository", UsersBackendRepository);
repository.set("AssetsRepository", AssetsBackendRepository);
repository.set("EarlyAccessRepository", EarlyAccessBackendRepository);
repository.set("BusinessRepository", BusinessBackendRepository);
