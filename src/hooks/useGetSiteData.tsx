import { useGetRiverData } from "./useGetRiverData";

interface ValuesProp {
  variable: {
    unit: { unitCode: string };
    variableName: string;
    variableDescription: string;
  };
  values: { value: { value: string }[] }[];
  sourceInfo: { siteName: string };
}

interface ValueProps {
  timeSeries: ValuesProp[];
}

export interface SiteData {
  value: ValueProps;
}

export const useGetSiteData = (site: string) => {
  const { response, error, loading } = useGetRiverData<SiteData>(
    `/site/${site}`
  );

  return { response, error, loading };
};

export default useGetSiteData;
