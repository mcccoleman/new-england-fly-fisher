import { Metrics, LocationData } from "src/hooks/useGetStateRiverData";
import { times, sample } from "lodash";

export const alphabetizeSites = (sites: LocationData[]) =>
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
  if (
    discharge &&
    (discharge.values[0].value[0].value === "-999999" ||
      discharge.values[0].value[0].value === undefined)
  )
    return false;

  return true;
};

export const generateRandomString = (length: number) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  return times(length, () => sample(characters)).join("");
};

export const generateRandomInteger = (max: number, min: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const flatten = (arr: any[]) => {
  return [].concat(...arr);
};

export const locationHasIce = (values: LocationData) =>
  !!flatten(
    values.metrics
      .map((val) => val.values.map((val) => val.qualifier))
      .reduce((a, b) => a.concat(b), [])
  ).find((val) => (val as unknown as any).qualifierCode === "Ice");
