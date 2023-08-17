import React, { FC } from "react";
import type { HeadFC } from "gatsby";
import { PageLayout } from "src/components/page-layout";
import { graphql } from "gatsby";
import { CtRiverDataQueryQuery as CtRiverDataQuery } from "graphql-types";
import { StateRiverDataSection } from "src/page-content/river-data/StateRiverDataSection";

export const ctRiverDataQuery = graphql`
  query CtRiverDataQuery {
    ...PageLayout
  }
`;

interface RiverDataProps {
  data: CtRiverDataQuery;
}

const CT: FC<RiverDataProps> = ({ data }) => (
  <PageLayout data={data} titleOverride="River Data">
    <StateRiverDataSection stateCode="ct" stateTitle="Connetticutt" />
  </PageLayout>
);

export default CT;

export const Head: HeadFC = () => <title>CT River Data</title>;
