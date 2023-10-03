import { SectorCountRequest, SectorNameRequest } from "./sectors.interfaces";

export interface SectorsRepository {
  getSectorsName(): Promise<SectorNameRequest[]>;
  getSectorsCount(): Promise<SectorCountRequest[]>;
}
