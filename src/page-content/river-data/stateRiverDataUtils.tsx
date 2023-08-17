import { Metrics, ResponseData } from "src/hooks/useGetRiverData";

export const alphebetizeSites = (sites: ResponseData[]) =>
  sites.sort((a, b) => {
    if (a.sourceInfo.siteName < b.sourceInfo.siteName) {
      return -1;
    }
    if (a.sourceInfo.siteName > b.sourceInfo.siteName) {
      return 1;
    }
    return 0;
  });

export const shouldDisplaySite = (discharge?: Metrics) => {
  if (!discharge) return false;
  if (discharge.values[0].value[0].value === "-999999") return false;

  return true;
};
