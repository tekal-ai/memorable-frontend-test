import { Sector, SectorItem } from "src/graphql/client";

const sectors: SectorItem[] = [
  { id: 0, name: "ApparelAndAccessories" },
  { id: 1, name: "BeautyAndPersonalCare" },
  { id: 2, name: "FoodAndBeverage" },
  { id: 3, name: "HomeAndGarden" },
  { id: 4, name: "SportsAndFitness" },
  { id: 5, name: "HomeAppliances" },
  { id: 6, name: "HomeImprovement" },
  { id: 7, name: "HouseholdSupplies" },
  { id: 8, name: "PetCare" },
  { id: 9, name: "TobaccoAndSmokingAccessories" },
  { id: 10, name: "ToysAndGames" },
  { id: 11, name: "OilAndGas" },
  { id: 12, name: "RenewableEnergy" },
  { id: 13, name: "Utilities" },
  { id: 14, name: "BankingAndLending" },
  { id: 15, name: "Insurance" },
  { id: 16, name: "InvestmentAndWealthManagement" },
  { id: 17, name: "PharmaceuticalsAndBiotechnology" },
  { id: 18, name: "MedicalDevices" },
  { id: 19, name: "HealthcareServices" },
  { id: 20, name: "ConstructionAndEngineering" },
  { id: 21, name: "AerospaceAndDefense" },
  { id: 22, name: "TransportationEquipment" },
  { id: 23, name: "SoftwareAndITServices" },
  { id: 24, name: "HardwareAndElectronics" },
  { id: 25, name: "InternetServices" },
  { id: 26, name: "TelecommunicationsEquipment" },
  { id: 27, name: "TelecommunicationsServices" },
  { id: 28, name: "NetworkingEquipment" },
  { id: 29, name: "AirlinesAndAirTransportation" },
  { id: 30, name: "HotelsAndResorts" },
  { id: 31, name: "RestaurantsAndFoodServices" },
  { id: 32, name: "TravelAgenciesAndTourOperators" },
  { id: 33, name: "AmusementParksAndAttractions" },
  { id: 34, name: "TelevisionBroadcastingAndProduction" },
  { id: 35, name: "FilmProductionAndDistribution" },
  { id: 36, name: "MusicRecordingAndProduction" },
  { id: 37, name: "Publishing" },
  { id: 38, name: "Gaming" },
  { id: 39, name: "ResidentialRealEstate" },
  { id: 40, name: "CommercialRealEstate" },
  { id: 41, name: "RealEstateInvestmentTrusts" },
  { id: 42, name: "RealEstateDevelopmentAndConstruction" },
  { id: 43, name: "PublicAndPrivateSchools" },
  { id: 44, name: "CollegesAndUniversities" },
  { id: 45, name: "OnlineEducationPlatforms" },
  { id: 46, name: "VocationalAndTechnicalSchools" },
  { id: 47, name: "CorporateTrainingAndDevelopment" },
];

export const useSectorsDomain = () => {
  const isSectorOnBrand = (sector: SectorItem, brandSectors: Sector[]) =>
    brandSectors.includes(sector.name);

  return {
    sectors,
    isSectorOnBrand,
  };
};
