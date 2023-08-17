import React, { FC } from "react";
import type { HeadFC } from "gatsby";
import { PageLayout } from "src/components/page-layout";
import { graphql } from "gatsby";
import { MaRiverDataQueryQuery as MaRiverDataQuery } from "graphql-types";
import { StateRiverDataSection } from "src/page-content/river-data/StateRiverDataSection";

export const maRiverDataQuery = graphql`
  query MaRiverDataQuery {
    ...PageLayout
  }
`;

interface RiverDataProps {
  data: MaRiverDataQuery;
}

const MA: FC<RiverDataProps> = ({ data }) => (
  <PageLayout data={data} titleOverride="River Data">
    <StateRiverDataSection stateCode="ma" stateTitle="Massachusetts" />
  </PageLayout>
);

export default MA;

export const Head: HeadFC = () => <title>MA River Data</title>;
