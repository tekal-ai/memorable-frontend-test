import {
  linkTypeMap,
  createClient as createClientOriginal,
  generateGraphqlOperation,
  assertSameVersion,
} from "@genql/runtime";
import types from "./types.esm";
var typeMap = linkTypeMap(types);
export * from "./guards.esm";

export var version = "2.10.0";
assertSameVersion(version);

export var createClient = function (options) {
  options = options || {};
  var optionsCopy = {
    url: "https://api-staging.memorable.io/graphql",
    queryRoot: typeMap.Query,
    mutationRoot: typeMap.Mutation,
    subscriptionRoot: typeMap.Subscription,
  };
  for (var name in options) {
    optionsCopy[name] = options[name];
  }
  return createClientOriginal(optionsCopy);
};

export const enumPlatform = {
  META: "META",
  TIKTOK: "TIKTOK",
};

export const enumAdAccountType = {
  MetaAdAccount: "MetaAdAccount",
  TiktokAdAccount: "TiktokAdAccount",
};

export const enumSocialAccountType = {
  FacebookPage: "FacebookPage",
  InstagramAccount: "InstagramAccount",
  TiktokAccount: "TiktokAccount",
};

export const enumConnectionState = {
  OK: "OK",
  ERROR: "ERROR",
};

export const enumCampaignObjective = {
  AWARENESS: "AWARENESS",
  ENGAGEMENT: "ENGAGEMENT",
  VIDEO_VIEWS: "VIDEO_VIEWS",
  TRAFFIC: "TRAFFIC",
  LEAD_GENERATION: "LEAD_GENERATION",
  CONVERSIONS: "CONVERSIONS",
  PRODUCT_SALES: "PRODUCT_SALES",
  APP_PROMOTION: "APP_PROMOTION",
  CROSS_OBJECTIVE: "CROSS_OBJECTIVE",
};

export const enumSuperClass = {
  VISUAL_VALUES: "VISUAL_VALUES",
  SCENE: "SCENE",
  PEOPLE: "PEOPLE",
  OVERLAY_TEXT: "OVERLAY_TEXT",
  METADATA: "METADATA",
  BRAND_ELEMENTS: "BRAND_ELEMENTS",
  ELEMENTS: "ELEMENTS",
  AUDIO: "AUDIO",
  AD_COPY: "AD_COPY",
  SPEECH: "SPEECH",
};

export const enumChannel = {
  facebook: "facebook",
  instagram: "instagram",
  tiktok: "tiktok",
  crossChannel: "crossChannel",
};

export const enumMetric = {
  impressions: "impressions",
  adRecallRate: "adRecallRate",
  reach: "reach",
  frequency: "frequency",
  costPerMille: "costPerMille",
  engagement: "engagement",
  engagementRate: "engagementRate",
  costPerEngagement: "costPerEngagement",
  videoViews: "videoViews",
  videoThroughRate: "videoThroughRate",
  costPerCompletedView: "costPerCompletedView",
  clicks: "clicks",
  clickThroughRate: "clickThroughRate",
  costPerClick: "costPerClick",
  conversion: "conversion",
  conversionRate: "conversionRate",
  costPerAcquisition: "costPerAcquisition",
  costPerAppInstall: "costPerAppInstall",
  costPerLead: "costPerLead",
  leadRate: "leadRate",
  appInstallRate: "appInstallRate",
  usage: "usage",
  spend: "spend",
  bai: "bai",
  fiveSecondsIndex: "fiveSecondsIndex",
  textSaliencyScore: "textSaliencyScore",
  logoSaliencyScore: "logoSaliencyScore",
  leads: "leads",
  appInstall: "appInstall",
};

export const enumFileType = {
  IMAGE: "IMAGE",
  VIDEO: "VIDEO",
};

export const enumTipValue = {
  noTip: "noTip",
};

export const enumTipDetail = {
  noTip: "noTip",
};

export const enumPlaceHolderType = {
  STRING: "STRING",
  NUMBER: "NUMBER",
  PERCENTAGE: "PERCENTAGE",
  CURRENCY: "CURRENCY",
  METRIC: "METRIC",
  METRIC_LIST: "METRIC_LIST",
};

export const enumTagRankingOrderingColumn = {
  tagImpressions: "tagImpressions",
  tagSpend: "tagSpend",
  frequencyValue: "frequencyValue",
  engagementRateValue: "engagementRateValue",
  videoThroughRateValue: "videoThroughRateValue",
  clickThroughRateValue: "clickThroughRateValue",
  leadRateValue: "leadRateValue",
  conversionRateValue: "conversionRateValue",
  appInstallRateValue: "appInstallRateValue",
  costPerMileValue: "costPerMileValue",
  costPerEngagementValue: "costPerEngagementValue",
  costPerCompletedVideoValue: "costPerCompletedVideoValue",
  costPerClickValue: "costPerClickValue",
  costPerLeadValue: "costPerLeadValue",
  costPerAcquisitionValue: "costPerAcquisitionValue",
  costPerAppInstallValue: "costPerAppInstallValue",
};

export const enumOrderingDirection = {
  ASC: "ASC",
  DESC: "DESC",
};

export const enumScale = {
  days: "days",
  weeks: "weeks",
};

export const enumLabeledMetricValue = {
  unknown: "unknown",
  low: "low",
  mid: "mid",
  high: "high",
};

export const enumCreativeStatus = {
  ConversionPending: "ConversionPending",
  MemorabilityPending: "MemorabilityPending",
  TaggingPending: "TaggingPending",
  SaliencyPending: "SaliencyPending",
  Ready: "Ready",
};

export const enumSector = {
  ApparelAndAccessories: "ApparelAndAccessories",
  BeautyAndPersonalCare: "BeautyAndPersonalCare",
  FoodAndBeverage: "FoodAndBeverage",
  HomeAndGarden: "HomeAndGarden",
  SportsAndFitness: "SportsAndFitness",
  HomeAppliances: "HomeAppliances",
  HomeImprovement: "HomeImprovement",
  HouseholdSupplies: "HouseholdSupplies",
  PetCare: "PetCare",
  TobaccoAndSmokingAccessories: "TobaccoAndSmokingAccessories",
  ToysAndGames: "ToysAndGames",
  OilAndGas: "OilAndGas",
  RenewableEnergy: "RenewableEnergy",
  Utilities: "Utilities",
  BankingAndLending: "BankingAndLending",
  Insurance: "Insurance",
  InvestmentAndWealthManagement: "InvestmentAndWealthManagement",
  PharmaceuticalsAndBiotechnology: "PharmaceuticalsAndBiotechnology",
  MedicalDevices: "MedicalDevices",
  HealthcareServices: "HealthcareServices",
  ConstructionAndEngineering: "ConstructionAndEngineering",
  AerospaceAndDefense: "AerospaceAndDefense",
  TransportationEquipment: "TransportationEquipment",
  SoftwareAndITServices: "SoftwareAndITServices",
  HardwareAndElectronics: "HardwareAndElectronics",
  InternetServices: "InternetServices",
  TelecommunicationsEquipment: "TelecommunicationsEquipment",
  TelecommunicationsServices: "TelecommunicationsServices",
  NetworkingEquipment: "NetworkingEquipment",
  AirlinesAndAirTransportation: "AirlinesAndAirTransportation",
  HotelsAndResorts: "HotelsAndResorts",
  RestaurantsAndFoodServices: "RestaurantsAndFoodServices",
  TravelAgenciesAndTourOperators: "TravelAgenciesAndTourOperators",
  AmusementParksAndAttractions: "AmusementParksAndAttractions",
  TelevisionBroadcastingAndProduction: "TelevisionBroadcastingAndProduction",
  FilmProductionAndDistribution: "FilmProductionAndDistribution",
  MusicRecordingAndProduction: "MusicRecordingAndProduction",
  Publishing: "Publishing",
  Gaming: "Gaming",
  ResidentialRealEstate: "ResidentialRealEstate",
  CommercialRealEstate: "CommercialRealEstate",
  RealEstateInvestmentTrusts: "RealEstateInvestmentTrusts",
  RealEstateDevelopmentAndConstruction: "RealEstateDevelopmentAndConstruction",
  PublicAndPrivateSchools: "PublicAndPrivateSchools",
  CollegesAndUniversities: "CollegesAndUniversities",
  OnlineEducationPlatforms: "OnlineEducationPlatforms",
  VocationalAndTechnicalSchools: "VocationalAndTechnicalSchools",
  CorporateTrainingAndDevelopment: "CorporateTrainingAndDevelopment",
};

export const enumBrandStatus = {
  IN_PROGRESS: "IN_PROGRESS",
  DATA_READY: "DATA_READY",
  MODEL_TRAINING: "MODEL_TRAINING",
  READY: "READY",
};

export const enumInvitationType = {
  referral: "referral",
  internal: "internal",
};

export var generateQueryOp = function (fields) {
  return generateGraphqlOperation("query", typeMap.Query, fields);
};
export var generateMutationOp = function (fields) {
  return generateGraphqlOperation("mutation", typeMap.Mutation, fields);
};
export var generateSubscriptionOp = function (fields) {
  return generateGraphqlOperation("subscription", typeMap.Subscription, fields);
};
export var everything = {
  __scalar: true,
};
