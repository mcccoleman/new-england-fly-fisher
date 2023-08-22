import React, { FC } from "react";
import { PageLayout } from "src/components/page-layout";
import { graphql } from "gatsby";
import { RiverDataQueryQuery as RiverDataQuery } from "graphql-types";
import { StateRiverDataSection } from "src/page-content/river-data/StateRiverDataSection";
import { DataDisclaimer } from "src/page-content/river-data/DataDisclaimer";

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
    <DataDisclaimer />
    <StateRiverDataSection stateCode={stateCode} stateTitle={stateTitle} />
  </PageLayout>
);

export default RiversInState;

export const Head: FC<RiverDataProps> = ({ pageContext: { stateCode } }) => (
  <title>{stateCode.toUpperCase()} River Data</title>
);
