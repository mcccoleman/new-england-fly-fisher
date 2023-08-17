import React, { FC } from "react";
import type { HeadFC } from "gatsby";
import { PageLayout } from "src/components/page-layout";
import { graphql } from "gatsby";
import { RiRiverDataQueryQuery as RiRiverDataQuery } from "graphql-types";
import { StateRiverDataSection } from "src/page-content/river-data/StateRiverDataSection";

export const riRiverDataQuery = graphql`
  query RiRiverDataQuery {
    ...PageLayout
  }
`;

interface RiverDataProps {
  data: RiRiverDataQuery;
}

const RI: FC<RiverDataProps> = ({ data }) => (
  <PageLayout data={data} titleOverride="River Data">
    <StateRiverDataSection stateCode="ri" stateTitle="Rhode Island" />
  </PageLayout>
);

export default RI;

export const Head: HeadFC = () => <title>RI River Data</title>;
