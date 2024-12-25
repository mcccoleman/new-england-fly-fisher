import { StateCode } from "src/pages/river-data";
import { useGetRiverData } from "./useGetRiverData";

interface UnitCode {
  unitCode: string;
}

interface Variable {
  unit: UnitCode;
}

interface Qualifier {
  qualifierCode: string;
}

interface Value {
  value: string;
  qualifier: Qualifier[];
}

interface Values {
  value: Value[];
  qualifier: Qualifier[];
}

export interface Metrics {
  name: string;
  variable: Variable;
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
