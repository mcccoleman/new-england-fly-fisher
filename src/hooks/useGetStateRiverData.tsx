import { StateCode } from "src/pages/river-data";
import { useGetRiverData } from "./useGetRiverData";

interface UnitCode {
  unitCode: string;
}

interface Varaible {
  unit: UnitCode;
}

interface Value {
  value: string;
}

interface Values {
  value: Value[];
}

export interface Metrics {
  name: string;
  variable: Varaible;
  values: Values[];
}

interface SiteCode {
  value: string;
  network: string;
  agencyCode: string;
}

interface SourceInfo {
  siteName: string;
  siteCode: SiteCode[];
}

export interface LocationData {
  sourceInfo: SourceInfo;
  metrics: Metrics[];
}

export const useGetStateRiverData = (state: StateCode) => {
  const { response, error, loading } = useGetRiverData<LocationData[]>(
    `/state/${state}`
  );

  return { response, error, loading };
};
