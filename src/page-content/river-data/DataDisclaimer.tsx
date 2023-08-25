import React, { FC } from "react";
import { SecondaryCard } from "src/components/cards";
import { Paragraph, H4 } from "src/components/typography";

interface DataDisclaimerProps {}

export const DataDisclaimer: FC<DataDisclaimerProps> = () => (
  <SecondaryCard column>
    <H4>
      Please note that the data displayed below was acquired through the{" "}
      <a
        href="https://waterservices.usgs.gov/"
        target="_blank"
        rel="noreferrer"
      >
        USGS's publicly available API Service
      </a>
      .
    </H4>
    <Paragraph>
      The author of this site in no way guarantees the accuracy of the
      information displayed below. The information may be incorrect or out of
      date. Please independently verify before using.
    </Paragraph>
  </SecondaryCard>
);
