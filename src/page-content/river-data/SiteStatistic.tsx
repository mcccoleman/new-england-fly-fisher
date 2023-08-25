import React, { FC } from "react";
import { Flex } from "src/components/flex";
import { H3, H4 } from "src/components/typography";

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
      <H4>{unit}</H4>
    </Flex>
  </Flex>
);
