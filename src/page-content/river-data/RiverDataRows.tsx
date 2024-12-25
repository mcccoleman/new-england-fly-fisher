import React, { FC } from "react";
import { LocationData } from "src/hooks/useGetStateRiverData";
import {
  alphabetizeSites,
  locationHasIce,
  shouldDisplaySite,
} from "./stateRiverDataUtils";
import { StyledLink } from "src/components/navigation/shared";
import { H4 } from "src/components/typography";
import { Flex } from "src/components/flex";
import { StateCode } from "src/pages/river-data";

interface RiverDataRowsProps {
  response: LocationData[];
  stateCode: StateCode;
}

function flatten(arr: any[]) {
  return [].concat(...arr);
}

export const RiverDataRows: FC<RiverDataRowsProps> = ({
  stateCode,
  response,
}) => (
  <>
    {alphabetizeSites(response).map((values, idx) => {
      const discharge = values.metrics.find(
        (value) => value.variable.unit.unitCode === "ft3/s"
      );

      const hasIce = locationHasIce(values);
      const dataIsUnknown = !shouldDisplaySite(discharge);

      return (
        <StyledLink
          to={`/river-data/${stateCode}/${values.sourceInfo.siteCode[0].value}`}
          key={idx}
        >
          <Flex justifyContent="space-between">
            <H4 key={values.sourceInfo.siteCode[0].value}>
              {values.sourceInfo.siteName}
            </H4>
            <H4>
              {dataIsUnknown ||
              discharge?.values[0].value[0].value === undefined
                ? "Unavailable"
                : hasIce
                ? "Frozen"
                : `${discharge?.values[0].value[0].value} ft3/s`}
            </H4>
          </Flex>
        </StyledLink>
      );
    })}
  </>
);
