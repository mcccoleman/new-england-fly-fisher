import React, { FC } from "react";
import type { HeadFC } from "gatsby";
import { PageLayout } from "src/components/page-layout";
import { graphql } from "gatsby";
import { VtRiverDataQueryQuery as VtRiverDataQuery } from "graphql-types";
import { StateRiverDataSection } from "src/page-content/river-data/StateRiverDataSection";

export const vtRiverDataQuery = graphql`
  query VtRiverDataQuery {
    ...PageLayout
  }
`;

interface RiverDataProps {
  data: VtRiverDataQuery;
}

const Vt: FC<RiverDataProps> = ({ data }) => (
  <PageLayout data={data} titleOverride="River Data">
    <StateRiverDataSection stateCode="vt" stateTitle="Vermont" />
  </PageLayout>
);

export default Vt;

export const Head: HeadFC = () => <title>VT River Data</title>;
