import { SectorsRepository } from "src/domain/sectors/sectors.domain";
import {
  sectorsNames,
  sectorsCounts,
} from "src/domain/sectors/mocks";
import { SectorCount, SectorName } from "src/graphql/client";

export class SectorsBackendRepository implements SectorsRepository {
  async getSectorsName(): Promise<SectorName[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(sectorsNames);
      }, 1000);
    });
  }

  async getSectorsCount(): Promise<SectorCount[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(sectorsCounts);
      }, 1000);
    });
  }
}
