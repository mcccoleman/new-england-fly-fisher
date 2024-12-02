import React, { FC } from "react";
import { H4 } from "src/components/typography";
import { Flex } from "src/components/flex";
import { times, constant, sample } from "lodash";
import styled from "styled-components";
import {
  generateRandomString,
  generateRandomInteger,
} from "./stateRiverDataUtils";
import { StateCode } from "src/pages/river-data";

const StyledH4 = styled(H4)`
  filter: blur(4px);
`;

const waterBodies = ["RIVER", "STREAM", "BROOK"];

interface RiverDataLoadingProps {
  defaultLoadingRows?: number;
}

export const RiverDataLoading: FC<RiverDataLoadingProps> = ({
  defaultLoadingRows = 8,
}) => (
  <>
    {times(defaultLoadingRows, constant(null)).map((_, index) => (
      <Flex justifyContent="space-between" key={index}>
        <StyledH4>
          {generateRandomString(generateRandomInteger(12, 6))}{" "}
          {sample(waterBodies)} at{" "}
          {generateRandomString(generateRandomInteger(12, 6))},{" "}
          {
            [
              StateCode.CT,
              StateCode.MA,
              StateCode.ME,
              StateCode.NH,
              StateCode.RI,
              StateCode.VT,
            ][generateRandomInteger(0, 5)]
          }
        </StyledH4>
        <StyledH4>X.XX ft3/s</StyledH4>
      </Flex>
    ))}
  </>
);
