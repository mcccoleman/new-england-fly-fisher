import React, { FC } from "react";
import type { HeadFC } from "gatsby";
import { PageLayout } from "src/components/page-layout";
import { graphql } from "gatsby";
import { RiverDataQueryQuery as RiverDataQuery } from "graphql-types";
import { StateRiverDataSection } from "src/page-content/river-data/StateRiverDataSection";
import { DataDisclaimer } from "src/page-content/river-data/DataDisclaimer";

export const riverDataQuery = graphql`
  query RiverDataQuery {
    ...PageLayout
  }
`;

export enum StateCode {
  CT = "ct",
  ME = "me",
  MA = "ma",
  NH = "nh",
  RI = "ri",
  VT = "vt",
}

const stateDetails = [
  { stateCode: StateCode.CT, stateTitle: "Connecticut" },
  { stateCode: StateCode.ME, stateTitle: "Maine" },
  { stateCode: StateCode.MA, stateTitle: "Massachusetts" },
  { stateCode: StateCode.NH, stateTitle: "New Hampshire" },
  { stateCode: StateCode.RI, stateTitle: "Rhode Island" },
  { stateCode: StateCode.VT, stateTitle: "Vermont" },
];

interface RiverDataProps {
  data: RiverDataQuery;
}

const RiverData: FC<RiverDataProps> = ({ data }) => (
  <PageLayout data={data} titleOverride="River Data">
    <DataDisclaimer />
    {stateDetails.map((state, index) => (
      <StateRiverDataSection key={index} {...state} enableClickToStatePage />
    ))}
  </PageLayout>
);

export default RiverData;

export const Head: HeadFC = () => <title>River Data</title>;
