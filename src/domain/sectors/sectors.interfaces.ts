export interface SectorNameRequest {
  id: number;
  name: string;
}

export interface SectorCountRequest {
  id: number;
  count: number;
}

export interface SectorRequest {
  id: number;
  count?: number | undefined;
  name: string;
}
