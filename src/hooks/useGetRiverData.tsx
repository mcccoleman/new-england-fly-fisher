import axios from "axios";
import { useState, useEffect } from "react";

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

interface Metrics {
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

interface ResponseData {
  sourceInfo: SourceInfo;
  metrics: Metrics[];
}

export const useGetRiverData = (state: string) => {
  const [response, setResponse] = useState<ResponseData[] | null>(null);
  const [error, setError] = useState("");
  const [loading, setloading] = useState(true);

  const fetchData = () => {
    axios
      .get(`https://river-data-9b4002c324d3.herokuapp.com/state/${state}`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers":
            "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset, boundary, Content-Length",
        },
      })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { response, error, loading };
};
