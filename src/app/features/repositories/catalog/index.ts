import { AssetsBackendRepository } from "./assets.repository";
import { BrandBackendRepository } from "./brand.repository";
import { BusinessBackendRepository } from "./business.repository";
import { CreativeBackendRepository } from "./creative.repository";
import { EarlyAccessBackendRepository } from "./early-access.repository";
import { UsersBackendRepository } from "./users.repository";

export const repository = new Map();

repository.set("AssetsRepository", AssetsBackendRepository);
repository.set("BrandRepository", BrandBackendRepository);
repository.set("BusinessRepository", BusinessBackendRepository);
repository.set("CreativeRepository", CreativeBackendRepository);
repository.set("EarlyAccessRepository", EarlyAccessBackendRepository);
repository.set("UsersRepository", UsersBackendRepository);
