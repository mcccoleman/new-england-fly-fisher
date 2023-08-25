import React, { FC } from "react";
import { H1, H2 } from "src/components/typography";
import { ResponseData } from "src/hooks/useGetSiteData";
import { SiteStatistic } from "./SiteStatistic";
import { SecondaryCard } from "src/components/cards";

interface SiteRiverDataSectionProps {
  stateTitle: string;
  stateCode: string;
  siteCode: string;
  responseData: ResponseData;
}

export const SiteRiverDataSection: FC<SiteRiverDataSectionProps> = ({
  responseData,
  stateTitle,
}) => {
  const gageHeight = responseData.value.timeSeries.find(
    (value) => value.variable.variableName === "Gage height, ft"
  );

  const streamFlow = responseData.value.timeSeries.find(
    (value) => value.variable.variableName === "Streamflow, ft&#179;/s"
  );

  const totalPrecipitation = responseData.value.timeSeries.find(
    (value) => value.variable.variableName === "Precipitation, total, in"
  );

  const siteName = responseData.value.timeSeries[0].sourceInfo.siteName;

  const metrics = [
    {
      statistic: "Gage height",
      value: gageHeight?.values[0].value[0].value || "",
      unit: gageHeight?.variable.unit.unitCode || "",
      display: !!gageHeight,
    },
    {
      statistic: "Streamflow",
      value: streamFlow?.values[0].value[0].value || "",
      unit: streamFlow?.variable.unit.unitCode || "",
      display: !!streamFlow,
    },
    {
      statistic: "Precipitation",
      value: totalPrecipitation?.values[0].value[0].value || "",
      unit: totalPrecipitation?.variable.unit.unitCode || "",
      display: !!totalPrecipitation,
    },
  ].filter((value) => value.display);

  return (
    <>
      <H1>{stateTitle}</H1>
      <H2>{siteName}</H2>
      <SecondaryCard column>
        {metrics.map(({ statistic, value, unit }) => (
          <SiteStatistic statistic={statistic} value={value} unit={unit} />
        ))}
      </SecondaryCard>
    </>
  );
};
