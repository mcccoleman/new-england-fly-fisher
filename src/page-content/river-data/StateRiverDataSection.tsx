import React, { FC } from "react";
import { Flex } from "src/components/flex";
import { H1, H4 } from "src/components/typography";
import { useGetStateRiverData } from "src/hooks/useGetStateRiverData";
import styled from "styled-components";
import { alphabetizeSites, shouldDisplaySite } from "./stateRiverDataUtils";
import { StyledLink } from "src/components/navigation/shared";
import { StateCode } from "src/pages/river-data";
import { RiverDataRows } from "./RiverDataRows";
import { RiverDataLoading } from "./RiverDataLoading";

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
  const { response, loading } = useGetStateRiverData(stateCode);

  return (
    <StyledFlex column>
      {enableClickToStatePage ? (
        <StyledLink to={stateCode}>
          <H1>{stateTitle}</H1>
        </StyledLink>
      ) : (
        <H1>{stateTitle}</H1>
      )}
      {response && !loading ? (
        <RiverDataRows response={response} stateCode={stateCode} />
      ) : (
        <RiverDataLoading defaultLoadingRows={25} />
      )}
    </StyledFlex>
  );
};
