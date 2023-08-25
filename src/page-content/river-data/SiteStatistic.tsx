import React, { FC } from "react";
import { Flex } from "src/components/flex";
import { H3, H4 } from "src/components/typography";
import styled from "styled-components";

const StyledH4 = styled(H4)`
  margin-left: 5px;
`;

interface SiteStatisticProps {
  statistic: string;
  value: string;
  unit: string;
}

export const SiteStatistic: FC<SiteStatisticProps> = ({
  statistic,
  value,
  unit,
}) => (
  <Flex justifyContent="space-between">
    <H3>{statistic}</H3>
    <Flex>
      <H4>{value}</H4>
      <StyledH4>{unit}</StyledH4>
    </Flex>
  </Flex>
);
