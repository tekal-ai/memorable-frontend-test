import { SectorRepository, Sector } from "src/domain/sectors/sectors.domain";

const sectorsNames = [
  { id: 1, name: "Apparel and Accessories" },
  { id: 2, name: "Beauty and Personal Care" },
  { id: 3, name: "Food and Beverage" },
  { id: 4, name: "Home and Garden" },
  { id: 5, name: "Sports and Fitness" },
  { id: 6, name: "Home Appliances" },
  { id: 7, name: "Home Improvement" },
  { id: 8, name: "Household Supplies" },
  { id: 9, name: "Pet Care" },
  { id: 10, name: "Tobacco and Smoking Accessories" },
  { id: 11, name: "Toys and Games" },
  { id: 12, name: "Oil and Gas" },
  { id: 13, name: "Renewable Energy" },
  { id: 14, name: "Utilities" },
  { id: 15, name: "Banking and Lending" },
  { id: 16, name: "Insurance" },
  { id: 17, name: "Investment and Wealth Management" },
  { id: 18, name: "Pharmaceuticals and Biotechnology" },
  { id: 19, name: "Medical Devices" },
  { id: 20, name: "Healthcare Services" },
  { id: 21, name: "Construction and Engineering" },
  { id: 22, name: "Aerospace and Defense" },
  { id: 23, name: "Transportation Equipment" },
  { id: 24, name: "Software and IT Services" },
  { id: 25, name: "Hardware and Electronics" },
  { id: 26, name: "Internet Services" },
  { id: 27, name: "Telecommunications Equipment" },
  { id: 28, name: "Telecommunications Services" },
  { id: 29, name: "Networking Equipment" },
  { id: 30, name: "Airlines and air transportation" }
];

const sectorsCounts = [
  { id: 1, count: 457 },
  { id: 2, count: 512 },
  { id: 3, count: 79 },
  { id: 4, count: 687 },
  { id: 5, count: 234 },
  { id: 6, count: 820 },
  { id: 7, count: 112 },
  { id: 8, count: 400 },
  { id: 9, count: 517 },
  { id: 10, count: 300 },
  { id: 11, count: 700 },
  { id: 12, count: 120 },
  { id: 13, count: 350 },
  { id: 14, count: 600 },
  { id: 15, count: 450 },
  { id: 16, count: 250 },
  { id: 17, count: 500 },
  { id: 18, count: 100 },
  { id: 19, count: 550 },
  { id: 20, count: 200 },
  { id: 21, count: 650 },
  { id: 22, count: 150 },
  { id: 23, count: 700 },
  { id: 24, count: 50 },
  { id: 25, count: 750 },
  { id: 26, count: 400 },
  { id: 27, count: 800 },
  { id: 28, count: 350 },
  { id: 29, count: 750 },
  { id: 30, count: 300 }
];

export class SectorBackendRepository implements SectorRepository {
  async getSectors(): Promise<Sector[]> {
    return new Promise((resolve) => {
      /* This setTimeout is added here in order to simulate loading as required*/
      setTimeout(() => {
        const mergedSectors: Sector[] = sectorsCounts.map(sectorCount => {
          const sectorName = sectorsNames.find(name => name.id === sectorCount.id);
          return {
            id: sectorCount.id,
            count: sectorCount.count,
            name: sectorName ? sectorName.name : ''
          };
        });
        resolve(mergedSectors);
      }, 3000);
    });
  }
}
