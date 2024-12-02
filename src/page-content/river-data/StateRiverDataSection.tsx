import React, { FC } from "react";
import { Flex } from "src/components/flex";
import { H1, H4 } from "src/components/typography";
import { useGetStateRiverData } from "src/hooks/useGetStateRiverData";
import styled from "styled-components";
import { alphabetizeSites, shouldDisplaySite } from "./stateRiverDataUtils";
import { StyledLink } from "src/components/navigation/shared";
import { StateCode } from "src/pages/river-data";

const StyledFlex = styled(Flex)`
  width: 100%;
`;

interface StateRiverDataSectionProps {
  stateTitle: string;
  stateCode: StateCode;
  enableClickToStatePage?: boolean;
}

export const StateRiverDataSection: FC<StateRiverDataSectionProps> = ({
  stateCode,
  stateTitle,
  enableClickToStatePage = false,
}) => {
  const { response } = useGetStateRiverData(stateCode);

  if (!response) return null;

  const sortedSites = alphabetizeSites(response);

  return (
    <StyledFlex column>
      {enableClickToStatePage ? (
        <StyledLink to={stateCode}>
          <H1>{stateTitle}</H1>
        </StyledLink>
      ) : (
        <H1>{stateTitle}</H1>
      )}
      {sortedSites.map((values, idx) => {
        const discharge = values.metrics.find(
          (value) => value.variable.unit.unitCode === "ft3/s"
        );

        if (!shouldDisplaySite(discharge)) return null;

        return (
          <StyledLink
            to={`/river-data/${stateCode}/${values.sourceInfo.siteCode[0].value}`}
            key={idx}
          >
            <Flex justifyContent="space-between">
              <H4 key={values.sourceInfo.siteCode[0].value}>
                {values.sourceInfo.siteName}
              </H4>
              <H4>{discharge?.values[0].value[0].value} ft3/s</H4>
            </Flex>
          </StyledLink>
        );
      })}
    </StyledFlex>
  );
};
