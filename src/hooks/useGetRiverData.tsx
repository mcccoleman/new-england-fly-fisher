import axios from "axios";
import { useState, useEffect } from "react";
import { axiosHeaders } from "./sharedNetworkDetails";

export interface useGetRiverDataReturnValues<T> {
  response: T | null;
  error: string;
  loading: boolean;
}

export const useGetRiverData = <T,>(
  endPoint: string
): useGetRiverDataReturnValues<T> => {
  const [response, setResponse] = useState<null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = () =>
    axios
      .get(`${process.env.GATSBY_RIVER_DATA_ENDPOINT}/${endPoint}`, {
        headers: axiosHeaders,
      })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });

  useEffect(() => {
    fetchData();
  }, []);

  return { response, error, loading };
};
