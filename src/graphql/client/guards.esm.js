var Query_possibleTypes = ["Query"];
export var isQuery = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isQuery"');
  return Query_possibleTypes.includes(obj.__typename);
};

var BrandAssetsResponse_possibleTypes = ["BrandAssetsResponse"];
export var isBrandAssetsResponse = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isBrandAssetsResponse"');
  return BrandAssetsResponse_possibleTypes.includes(obj.__typename);
};

var AdAccount_possibleTypes = ["AdAccount"];
export var isAdAccount = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isAdAccount"');
  return AdAccount_possibleTypes.includes(obj.__typename);
};

var SocialAccount_possibleTypes = ["SocialAccount"];
export var isSocialAccount = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isSocialAccount"');
  return SocialAccount_possibleTypes.includes(obj.__typename);
};

var PlatformState_possibleTypes = ["PlatformState"];
export var isPlatformState = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isPlatformState"');
  return PlatformState_possibleTypes.includes(obj.__typename);
};

var IntegrationsAssets_possibleTypes = ["IntegrationsAssets"];
export var isIntegrationsAssets = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isIntegrationsAssets"');
  return IntegrationsAssets_possibleTypes.includes(obj.__typename);
};

var MetricsSummary_possibleTypes = ["MetricsSummary"];
export var isMetricsSummary = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isMetricsSummary"');
  return MetricsSummary_possibleTypes.includes(obj.__typename);
};

var Metrics_possibleTypes = ["Metrics"];
export var isMetrics = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isMetrics"');
  return Metrics_possibleTypes.includes(obj.__typename);
};

var MetricValue_possibleTypes = ["MetricValue"];
export var isMetricValue = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isMetricValue"');
  return MetricValue_possibleTypes.includes(obj.__typename);
};

var Insight_possibleTypes = ["Insight"];
export var isInsight = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isInsight"');
  return Insight_possibleTypes.includes(obj.__typename);
};

var Tag_possibleTypes = ["Tag"];
export var isTag = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isTag"');
  return Tag_possibleTypes.includes(obj.__typename);
};

var MetricVariance_possibleTypes = ["MetricVariance"];
export var isMetricVariance = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isMetricVariance"');
  return MetricVariance_possibleTypes.includes(obj.__typename);
};

var TreeNode_possibleTypes = ["TreeNode"];
export var isTreeNode = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isTreeNode"');
  return TreeNode_possibleTypes.includes(obj.__typename);
};

var Highlight_possibleTypes = ["Highlight"];
export var isHighlight = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isHighlight"');
  return Highlight_possibleTypes.includes(obj.__typename);
};

var TagOverallMetrics_possibleTypes = ["TagOverallMetrics"];
export var isTagOverallMetrics = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isTagOverallMetrics"');
  return TagOverallMetrics_possibleTypes.includes(obj.__typename);
};

var Tip_possibleTypes = ["Tip"];
export var isTip = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isTip"');
  return Tip_possibleTypes.includes(obj.__typename);
};

var TipPlaceHolder_possibleTypes = ["TipPlaceHolder"];
export var isTipPlaceHolder = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isTipPlaceHolder"');
  return TipPlaceHolder_possibleTypes.includes(obj.__typename);
};

var TotalValue_possibleTypes = ["TotalValue"];
export var isTotalValue = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isTotalValue"');
  return TotalValue_possibleTypes.includes(obj.__typename);
};

var AdProfile_possibleTypes = ["AdProfile"];
export var isAdProfile = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isAdProfile"');
  return AdProfile_possibleTypes.includes(obj.__typename);
};

var TagSummary_possibleTypes = ["TagSummary"];
export var isTagSummary = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isTagSummary"');
  return TagSummary_possibleTypes.includes(obj.__typename);
};

var MetricRange_possibleTypes = ["MetricRange"];
export var isMetricRange = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isMetricRange"');
  return MetricRange_possibleTypes.includes(obj.__typename);
};

var TagMetric_possibleTypes = ["TagMetric"];
export var isTagMetric = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isTagMetric"');
  return TagMetric_possibleTypes.includes(obj.__typename);
};

var DataPerformanceEntry_possibleTypes = ["DataPerformanceEntry"];
export var isDataPerformanceEntry = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isDataPerformanceEntry"');
  return DataPerformanceEntry_possibleTypes.includes(obj.__typename);
};

var SerialData_possibleTypes = ["SerialData"];
export var isSerialData = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isSerialData"');
  return SerialData_possibleTypes.includes(obj.__typename);
};

var PerformanceDataEntry_possibleTypes = ["PerformanceDataEntry"];
export var isPerformanceDataEntry = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isPerformanceDataEntry"');
  return PerformanceDataEntry_possibleTypes.includes(obj.__typename);
};

var SerialEntry_possibleTypes = ["SerialEntry"];
export var isSerialEntry = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isSerialEntry"');
  return SerialEntry_possibleTypes.includes(obj.__typename);
};

var CreativeProfile_possibleTypes = ["CreativeProfile"];
export var isCreativeProfile = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isCreativeProfile"');
  return CreativeProfile_possibleTypes.includes(obj.__typename);
};

var CreativeMetrics_possibleTypes = ["CreativeMetrics"];
export var isCreativeMetrics = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isCreativeMetrics"');
  return CreativeMetrics_possibleTypes.includes(obj.__typename);
};

var CreativeMetricValue_possibleTypes = ["CreativeMetricValue"];
export var isCreativeMetricValue = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isCreativeMetricValue"');
  return CreativeMetricValue_possibleTypes.includes(obj.__typename);
};

var ChannelPerformanceMetrics_possibleTypes = ["ChannelPerformanceMetrics"];
export var isChannelPerformanceMetrics = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isChannelPerformanceMetrics"');
  return ChannelPerformanceMetrics_possibleTypes.includes(obj.__typename);
};

var PerformanceMetrics_possibleTypes = ["PerformanceMetrics"];
export var isPerformanceMetrics = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isPerformanceMetrics"');
  return PerformanceMetrics_possibleTypes.includes(obj.__typename);
};

var CreativeLibraryFolder_possibleTypes = ["CreativeLibraryFolder"];
export var isCreativeLibraryFolder = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isCreativeLibraryFolder"');
  return CreativeLibraryFolder_possibleTypes.includes(obj.__typename);
};

var CreativeLibraryItem_possibleTypes = ["CreativeLibraryItem"];
export var isCreativeLibraryItem = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isCreativeLibraryItem"');
  return CreativeLibraryItem_possibleTypes.includes(obj.__typename);
};

var User_possibleTypes = ["User"];
export var isUser = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isUser"');
  return User_possibleTypes.includes(obj.__typename);
};

var BusinessAccount_possibleTypes = ["BusinessAccount"];
export var isBusinessAccount = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isBusinessAccount"');
  return BusinessAccount_possibleTypes.includes(obj.__typename);
};

var Brand_possibleTypes = ["Brand"];
export var isBrand = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isBrand"');
  return Brand_possibleTypes.includes(obj.__typename);
};

var Mutation_possibleTypes = ["Mutation"];
export var isMutation = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isMutation"');
  return Mutation_possibleTypes.includes(obj.__typename);
};

var AssetChecks_possibleTypes = ["AssetChecks"];
export var isAssetChecks = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isAssetChecks"');
  return AssetChecks_possibleTypes.includes(obj.__typename);
};

var UploadDataResponse_possibleTypes = ["UploadDataResponse"];
export var isUploadDataResponse = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isUploadDataResponse"');
  return UploadDataResponse_possibleTypes.includes(obj.__typename);
};

var PresignedData_possibleTypes = ["PresignedData"];
export var isPresignedData = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isPresignedData"');
  return PresignedData_possibleTypes.includes(obj.__typename);
};

var Invitation_possibleTypes = ["Invitation"];
export var isInvitation = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isInvitation"');
  return Invitation_possibleTypes.includes(obj.__typename);
};

var LoggedInUser_possibleTypes = ["LoggedInUser"];
export var isLoggedInUser = function (obj) {
  if (!obj || !obj.__typename)
    throw new Error('__typename is missing in "isLoggedInUser"');
  return LoggedInUser_possibleTypes.includes(obj.__typename);
};
