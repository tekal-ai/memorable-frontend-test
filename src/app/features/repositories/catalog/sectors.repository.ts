import { SectorsRepository } from "src/domain/sectors/sectors.domain";
import { SectorCount, SectorName } from "src/graphql/client";
import {
  getSectorsCount,
  getSectorsNames,
} from "src/graphql/client/schema-mock";
export class SectorsBackendRepository implements SectorsRepository {
  getSectorsNames(): SectorName[] {
    return getSectorsNames();
  }

  getSectorsCount(): SectorCount[] {
    return getSectorsCount();
  }
}
