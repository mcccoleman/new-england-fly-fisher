import React, { FC } from "react";
import type { HeadFC } from "gatsby";
import { PageLayout } from "src/components/page-layout";
import { graphql } from "gatsby";
import { NhRiverDataQueryQuery as NhRiverDataQuery } from "graphql-types";
import { StateRiverDataSection } from "src/page-content/river-data/StateRiverDataSection";

export const nhRiverDataQuery = graphql`
  query NhRiverDataQuery {
    ...PageLayout
  }
`;

interface RiverDataProps {
  data: NhRiverDataQuery;
}

const NH: FC<RiverDataProps> = ({ data }) => (
  <PageLayout data={data} titleOverride="River Data">
    <StateRiverDataSection stateCode="nh" stateTitle="New Hampshire" />
  </PageLayout>
);

export default NH;

export const Head: HeadFC = () => <title>NH River Data</title>;
