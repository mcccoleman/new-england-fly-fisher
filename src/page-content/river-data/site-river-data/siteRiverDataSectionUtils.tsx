import { SiteData } from "src/hooks/useGetSiteData";

export const formatSiteStatistics = (siteData: SiteData) => {
  const metrics = siteData.value.timeSeries.map((metric) => ({
    statistic: metric.variable.variableDescription,
    value: metric?.values[0].value[0].value || "",
    unit: metric?.variable.unit.unitCode || "",
  }));

  const siteName = siteData.value.timeSeries[0].sourceInfo.siteName;

  return {
    siteName,
    metrics,
  };
};
