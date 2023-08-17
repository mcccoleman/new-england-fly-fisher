import React, { FC } from "react";
import type { HeadFC } from "gatsby";
import { PageLayout } from "src/components/page-layout";
import { graphql } from "gatsby";
import { RiverDataQueryQuery as RiverDataQuery } from "graphql-types";
import { StateRiverDataSection } from "src/page-content/river-data/StateRiverDataSection";

export const stockingReportQuery = graphql`
  query RiverDataQuery {
    ...PageLayout
  }
`;

const stateDetails = [
  { stateCode: "ct", stateTitle: "Connecticut" },
  { stateCode: "me", stateTitle: "Maine" },
  { stateCode: "ma", stateTitle: "Massachusetts" },
  { stateCode: "nh", stateTitle: "New Hampshire" },
  { stateCode: "ri", stateTitle: "Rhode Island" },
  { stateCode: "vt", stateTitle: "Vermont" },
];

interface RiverDataProps {
  data: RiverDataQuery;
}

const RiverData: FC<RiverDataProps> = ({ data }) => (
  <PageLayout data={data} titleOverride="River Data">
    {stateDetails.map((state, index) => (
      <StateRiverDataSection key={index} {...state} />
    ))}
  </PageLayout>
);

export default RiverData;

export const Head: HeadFC = () => <title>River Data</title>;
