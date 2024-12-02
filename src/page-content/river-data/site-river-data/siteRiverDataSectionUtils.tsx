import { SiteData } from "src/hooks/useGetSiteData";

export const formatSiteStatistics = (siteData: SiteData) => {
  const metrics = siteData.value.timeSeries.map((metric) => {
    const { latitude, longitude } = metric?.sourceInfo.geoLocation.geogLocation;

    return {
      statistic: metric.variable.variableDescription,
      value: metric?.values[0].value[0].value || "",
      unit: metric?.variable.unit.unitCode || "",
      latitude,
      longitude,
    };
  });

  const siteName = siteData.value.timeSeries[0].sourceInfo.siteName;

  const { latitude, longitude } = metrics[0];

  return {
    latitude,
    longitude,
    siteName,
    metrics,
  };
};
