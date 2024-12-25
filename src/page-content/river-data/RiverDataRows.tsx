import React, { FC } from "react";
import { LocationData } from "src/hooks/useGetStateRiverData";
import { alphabetizeSites, formatCopyResponse } from "./stateRiverDataUtils";
import { StyledLink } from "src/components/navigation/shared";
import { H4 } from "src/components/typography";
import { Flex } from "src/components/flex";
import { StateCode } from "src/pages/river-data";

interface RiverDataRowsProps {
  response: LocationData[];
  stateCode: StateCode;
}

export const RiverDataRows: FC<RiverDataRowsProps> = ({
  stateCode,
  response,
}) => (
  <>
    {alphabetizeSites(response).map((values, idx) => (
      <StyledLink
        to={`/river-data/${stateCode}/${values.sourceInfo.siteCode[0].value}`}
        key={idx}
      >
        <Flex justifyContent="space-between">
          <H4 key={values.sourceInfo.siteCode[0].value}>
            {values.sourceInfo.siteName}
          </H4>
          <H4>{formatCopyResponse(values)}</H4>
        </Flex>
      </StyledLink>
    ))}
  </>
);
