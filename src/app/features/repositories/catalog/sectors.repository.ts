import {
  SectorItem,
  SectorsRepository,
} from "src/domain/sectors/sectors.domain";
import { sectorsNames, transformedArray } from "../mocks/sectors";

export class SectorsBackendRepository implements SectorsRepository {
  async getSectors(): Promise<SectorItem[]> {
    return Promise.resolve(
      sectorsNames.map((sectorName) => {
        const { id } = sectorName;
        const { count = 0 } =
          transformedArray.find((item) => item.id === id) || {};
        return {
          ...sectorName,
          count,
        };
      }),
    );
  }
}
