import { AssetsBackendRepository } from "./assets.repository";
import { BrandBackendRepository } from "./brand.repository";
import { BusinessBackendRepository } from "./business.repository";
import { EarlyAccessBackendRepository } from "./early-access.repository";
import { LibraryBackendRepository } from "./library.repository";
import { UsersBackendRepository } from "./users.repository";

export const repository = new Map();

repository.set("BrandRepository", BrandBackendRepository);
repository.set("UsersRepository", UsersBackendRepository);
repository.set("AssetsRepository", AssetsBackendRepository);
repository.set("EarlyAccessRepository", EarlyAccessBackendRepository);
repository.set("BusinessRepository", BusinessBackendRepository);
repository.set("LibraryRepository", LibraryBackendRepository);
