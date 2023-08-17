import React, { FC } from "react";
import { Flex } from "src/components/flex";
import { H1, H4 } from "src/components/typography";
import { useGetRiverData } from "src/hooks/useGetRiverData";
import styled from "styled-components";

const StyledFlex = styled(Flex)`
  width: 100%;
`;

interface StateRiverDataSectionProps {
  stateTitle: string;
  stateCode: string;
}

export const StateRiverDataSection: FC<StateRiverDataSectionProps> = ({
  stateCode,
  stateTitle,
}) => {
  const { response } = useGetRiverData(stateCode);

  if (!response) return null;

  const sortedSites = response.sort((a, b) => {
    if (a.sourceInfo.siteName < b.sourceInfo.siteName) {
      return -1;
    }
    if (a.sourceInfo.siteName > b.sourceInfo.siteName) {
      return 1;
    }
    return 0;
  });

  return (
    <StyledFlex column>
      <H1>{stateTitle}</H1>
      {sortedSites.map((values) => {
        const discharge = values.metrics.find(
          (value) => value.variable.unit.unitCode === "ft3/s"
        );

        const hasDischarge = !!discharge;

        if (!hasDischarge) return null;

        return (
          <Flex justifyContent="space-between">
            <H4 key={values.sourceInfo.siteCode[0].value}>
              {values.sourceInfo.siteName}
            </H4>
            <H4>{discharge.values[0].value[0].value} ft3/s</H4>
          </Flex>
        );
      })}
    </StyledFlex>
  );
};
