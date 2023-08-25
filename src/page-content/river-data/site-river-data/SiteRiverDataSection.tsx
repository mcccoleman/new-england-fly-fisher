import React, { FC } from "react";
import { H1, H2 } from "src/components/typography";
import { SiteData } from "src/hooks/useGetSiteData";
import { SiteStatistic } from "../SiteStatistic";
import { SecondaryCard } from "src/components/cards";
import { formatSiteStatistics } from "./siteRiverDataSectionUtils";

interface SiteRiverDataSectionProps {
  stateTitle: string;
  stateCode: string;
  siteCode: string;
  responseData: SiteData;
}

export const SiteRiverDataSection: FC<SiteRiverDataSectionProps> = ({
  responseData,
  stateTitle,
}) => {
  const { siteName, metrics } = formatSiteStatistics(responseData);

  return (
    <>
      <H1>{stateTitle}</H1>
      <H2>{siteName}</H2>
      <SecondaryCard column>
        {metrics.map(({ statistic, value, unit }, idx) => (
          <SiteStatistic
            statistic={statistic}
            value={value}
            unit={unit}
            key={idx}
          />
        ))}
      </SecondaryCard>
    </>
  );
};
