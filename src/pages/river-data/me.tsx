import React, { FC } from "react";
import type { HeadFC } from "gatsby";
import { PageLayout } from "src/components/page-layout";
import { graphql } from "gatsby";
import { MeRiverDataQueryQuery as MeRiverDataQuery } from "graphql-types";
import { StateRiverDataSection } from "src/page-content/river-data/StateRiverDataSection";

export const meRiverDataQuery = graphql`
  query MeRiverDataQuery {
    ...PageLayout
  }
`;

interface RiverDataProps {
  data: MeRiverDataQuery;
}

const ME: FC<RiverDataProps> = ({ data }) => (
  <PageLayout data={data} titleOverride="River Data">
    <StateRiverDataSection stateCode="me" stateTitle="Maine" />
  </PageLayout>
);

export default ME;

export const Head: HeadFC = () => <title>ME River Data</title>;
