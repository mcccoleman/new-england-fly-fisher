import { useGetRiverData } from "./useGetRiverData";

interface ValuesProp {
  variable: { unit: { unitCode: string }; variableName: string };
  values: { value: { value: string }[] }[];
  sourceInfo: { siteName: string };
}

interface ValueProps {
  timeSeries: ValuesProp[];
}

interface Data {
  value: ValueProps;
}

interface ResponseData {
  response: Data;
}

export const useGetSiteData = (site: string) => {
  const { response, error, loading } = useGetRiverData<ResponseData>(
    `/site/${site}`
  );

  return { response, error, loading };
};

export default useGetSiteData;
