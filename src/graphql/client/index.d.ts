import {
  FieldsSelection,
  GraphqlOperation,
  ClientOptions,
  Observable,
} from "@genql/runtime";
import { SubscriptionClient } from "subscriptions-transport-ws";
export * from "./schema";
import {
  QueryRequest,
  QueryPromiseChain,
  Query,
  MutationRequest,
  MutationPromiseChain,
  Mutation,
} from "./schema";
export declare const createClient: (options?: ClientOptions) => Client;
export declare const everything: { __scalar: boolean };
export declare const version: string;

export interface Client {
  wsClient?: SubscriptionClient;

  query<R extends QueryRequest>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<Query, R>>;

  mutation<R extends MutationRequest>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<Mutation, R>>;

  chain: {
    query: QueryPromiseChain;

    mutation: MutationPromiseChain;
  };
}

export type QueryResult<fields extends QueryRequest> = FieldsSelection<
  Query,
  fields
>;

export declare const generateQueryOp: (
  fields: QueryRequest & { __name?: string },
) => GraphqlOperation;
export type MutationResult<fields extends MutationRequest> = FieldsSelection<
  Mutation,
  fields
>;

export declare const generateMutationOp: (
  fields: MutationRequest & { __name?: string },
) => GraphqlOperation;

export declare const enumPlatform: {
  readonly META: "META";
  readonly TIKTOK: "TIKTOK";
};

export declare const enumAdAccountType: {
  readonly MetaAdAccount: "MetaAdAccount";
  readonly TiktokAdAccount: "TiktokAdAccount";
};

export declare const enumSocialAccountType: {
  readonly FacebookPage: "FacebookPage";
  readonly InstagramAccount: "InstagramAccount";
  readonly TiktokAccount: "TiktokAccount";
};

export declare const enumConnectionState: {
  readonly OK: "OK";
  readonly ERROR: "ERROR";
};

export declare const enumCampaignObjective: {
  readonly AWARENESS: "AWARENESS";
  readonly ENGAGEMENT: "ENGAGEMENT";
  readonly VIDEO_VIEWS: "VIDEO_VIEWS";
  readonly TRAFFIC: "TRAFFIC";
  readonly LEAD_GENERATION: "LEAD_GENERATION";
  readonly CONVERSIONS: "CONVERSIONS";
  readonly PRODUCT_SALES: "PRODUCT_SALES";
  readonly APP_PROMOTION: "APP_PROMOTION";
  readonly CROSS_OBJECTIVE: "CROSS_OBJECTIVE";
};

export declare const enumSuperClass: {
  readonly VISUAL_VALUES: "VISUAL_VALUES";
  readonly SCENE: "SCENE";
  readonly PEOPLE: "PEOPLE";
  readonly OVERLAY_TEXT: "OVERLAY_TEXT";
  readonly METADATA: "METADATA";
  readonly BRAND_ELEMENTS: "BRAND_ELEMENTS";
  readonly ELEMENTS: "ELEMENTS";
  readonly AUDIO: "AUDIO";
  readonly AD_COPY: "AD_COPY";
  readonly SPEECH: "SPEECH";
};

export declare const enumChannel: {
  readonly facebook: "facebook";
  readonly instagram: "instagram";
  readonly tiktok: "tiktok";
  readonly crossChannel: "crossChannel";
};

export declare const enumMetric: {
  readonly impressions: "impressions";
  readonly adRecallRate: "adRecallRate";
  readonly reach: "reach";
  readonly frequency: "frequency";
  readonly costPerMille: "costPerMille";
  readonly engagement: "engagement";
  readonly engagementRate: "engagementRate";
  readonly costPerEngagement: "costPerEngagement";
  readonly videoViews: "videoViews";
  readonly videoThroughRate: "videoThroughRate";
  readonly costPerCompletedView: "costPerCompletedView";
  readonly clicks: "clicks";
  readonly clickThroughRate: "clickThroughRate";
  readonly costPerClick: "costPerClick";
  readonly conversion: "conversion";
  readonly conversionRate: "conversionRate";
  readonly costPerAcquisition: "costPerAcquisition";
  readonly costPerAppInstall: "costPerAppInstall";
  readonly costPerLead: "costPerLead";
  readonly leadRate: "leadRate";
  readonly appInstallRate: "appInstallRate";
  readonly usage: "usage";
  readonly spend: "spend";
  readonly bai: "bai";
  readonly fiveSecondsIndex: "fiveSecondsIndex";
  readonly textSaliencyScore: "textSaliencyScore";
  readonly logoSaliencyScore: "logoSaliencyScore";
  readonly leads: "leads";
  readonly appInstall: "appInstall";
};

export declare const enumFileType: {
  readonly IMAGE: "IMAGE";
  readonly VIDEO: "VIDEO";
};

export declare const enumTipValue: {
  readonly noTip: "noTip";
};

export declare const enumTipDetail: {
  readonly noTip: "noTip";
};

export declare const enumPlaceHolderType: {
  readonly STRING: "STRING";
  readonly NUMBER: "NUMBER";
  readonly PERCENTAGE: "PERCENTAGE";
  readonly CURRENCY: "CURRENCY";
  readonly METRIC: "METRIC";
  readonly METRIC_LIST: "METRIC_LIST";
};

export declare const enumTagRankingOrderingColumn: {
  readonly tagImpressions: "tagImpressions";
  readonly tagSpend: "tagSpend";
  readonly frequencyValue: "frequencyValue";
  readonly engagementRateValue: "engagementRateValue";
  readonly videoThroughRateValue: "videoThroughRateValue";
  readonly clickThroughRateValue: "clickThroughRateValue";
  readonly leadRateValue: "leadRateValue";
  readonly conversionRateValue: "conversionRateValue";
  readonly appInstallRateValue: "appInstallRateValue";
  readonly costPerMileValue: "costPerMileValue";
  readonly costPerEngagementValue: "costPerEngagementValue";
  readonly costPerCompletedVideoValue: "costPerCompletedVideoValue";
  readonly costPerClickValue: "costPerClickValue";
  readonly costPerLeadValue: "costPerLeadValue";
  readonly costPerAcquisitionValue: "costPerAcquisitionValue";
  readonly costPerAppInstallValue: "costPerAppInstallValue";
};

export declare const enumOrderingDirection: {
  readonly ASC: "ASC";
  readonly DESC: "DESC";
};

export declare const enumScale: {
  readonly days: "days";
  readonly weeks: "weeks";
};

export declare const enumLabeledMetricValue: {
  readonly unknown: "unknown";
  readonly low: "low";
  readonly mid: "mid";
  readonly high: "high";
};

export declare const enumCreativeStatus: {
  readonly ConversionPending: "ConversionPending";
  readonly MemorabilityPending: "MemorabilityPending";
  readonly TaggingPending: "TaggingPending";
  readonly SaliencyPending: "SaliencyPending";
  readonly Ready: "Ready";
};

export declare const enumSector: {
  readonly ApparelAndAccessories: "ApparelAndAccessories";
  readonly BeautyAndPersonalCare: "BeautyAndPersonalCare";
  readonly FoodAndBeverage: "FoodAndBeverage";
  readonly HomeAndGarden: "HomeAndGarden";
  readonly SportsAndFitness: "SportsAndFitness";
  readonly HomeAppliances: "HomeAppliances";
  readonly HomeImprovement: "HomeImprovement";
  readonly HouseholdSupplies: "HouseholdSupplies";
  readonly PetCare: "PetCare";
  readonly TobaccoAndSmokingAccessories: "TobaccoAndSmokingAccessories";
  readonly ToysAndGames: "ToysAndGames";
  readonly OilAndGas: "OilAndGas";
  readonly RenewableEnergy: "RenewableEnergy";
  readonly Utilities: "Utilities";
  readonly BankingAndLending: "BankingAndLending";
  readonly Insurance: "Insurance";
  readonly InvestmentAndWealthManagement: "InvestmentAndWealthManagement";
  readonly PharmaceuticalsAndBiotechnology: "PharmaceuticalsAndBiotechnology";
  readonly MedicalDevices: "MedicalDevices";
  readonly HealthcareServices: "HealthcareServices";
  readonly ConstructionAndEngineering: "ConstructionAndEngineering";
  readonly AerospaceAndDefense: "AerospaceAndDefense";
  readonly TransportationEquipment: "TransportationEquipment";
  readonly SoftwareAndITServices: "SoftwareAndITServices";
  readonly HardwareAndElectronics: "HardwareAndElectronics";
  readonly InternetServices: "InternetServices";
  readonly TelecommunicationsEquipment: "TelecommunicationsEquipment";
  readonly TelecommunicationsServices: "TelecommunicationsServices";
  readonly NetworkingEquipment: "NetworkingEquipment";
  readonly AirlinesAndAirTransportation: "AirlinesAndAirTransportation";
  readonly HotelsAndResorts: "HotelsAndResorts";
  readonly RestaurantsAndFoodServices: "RestaurantsAndFoodServices";
  readonly TravelAgenciesAndTourOperators: "TravelAgenciesAndTourOperators";
  readonly AmusementParksAndAttractions: "AmusementParksAndAttractions";
  readonly TelevisionBroadcastingAndProduction: "TelevisionBroadcastingAndProduction";
  readonly FilmProductionAndDistribution: "FilmProductionAndDistribution";
  readonly MusicRecordingAndProduction: "MusicRecordingAndProduction";
  readonly Publishing: "Publishing";
  readonly Gaming: "Gaming";
  readonly ResidentialRealEstate: "ResidentialRealEstate";
  readonly CommercialRealEstate: "CommercialRealEstate";
  readonly RealEstateInvestmentTrusts: "RealEstateInvestmentTrusts";
  readonly RealEstateDevelopmentAndConstruction: "RealEstateDevelopmentAndConstruction";
  readonly PublicAndPrivateSchools: "PublicAndPrivateSchools";
  readonly CollegesAndUniversities: "CollegesAndUniversities";
  readonly OnlineEducationPlatforms: "OnlineEducationPlatforms";
  readonly VocationalAndTechnicalSchools: "VocationalAndTechnicalSchools";
  readonly CorporateTrainingAndDevelopment: "CorporateTrainingAndDevelopment";
};

export declare const enumBrandStatus: {
  readonly IN_PROGRESS: "IN_PROGRESS";
  readonly DATA_READY: "DATA_READY";
  readonly MODEL_TRAINING: "MODEL_TRAINING";
  readonly READY: "READY";
};

export declare const enumInvitationType: {
  readonly referral: "referral";
  readonly internal: "internal";
};
