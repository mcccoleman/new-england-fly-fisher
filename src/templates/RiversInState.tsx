import React, { FC } from "react";
import type { HeadFC } from "gatsby";
import { PageLayout } from "src/components/page-layout";
import { graphql } from "gatsby";
import { RiverDataQueryQuery as RiverDataQuery } from "graphql-types";
import { StateRiverDataSection } from "src/page-content/river-data/StateRiverDataSection";

export const riversInState = graphql`
  query RiverDataQuery {
    ...PageLayout
  }
`;

interface RiverDataProps {
  data: RiverDataQuery;
  pageContext: { stateCode: string; stateTitle: string };
}

const RiversInState: FC<RiverDataProps> = ({
  data,
  pageContext: { stateCode, stateTitle },
}) => (
  <PageLayout data={data} titleOverride="River Data">
    <StateRiverDataSection stateCode={stateCode} stateTitle={stateTitle} />
  </PageLayout>
);

export default RiversInState;

export const Head: HeadFC = ({ data }) => <title>CT River Data</title>;
