import { graphql } from "gatsby";
import { SiteDataQueryQuery as SiteDataQuery } from "graphql-types";
import React, { FC } from "react";
import { PageLayout } from "src/components/page-layout";
import useGetSiteData from "src/hooks/useGetSiteData";
import { DataDisclaimer } from "src/page-content/river-data/DataDisclaimer";
import { SiteRiverDataSection } from "src/page-content/river-data/site-river-data/SiteRiverDataSection";

export const siteData = graphql`
  query SiteDataQuery {
    ...PageLayout
  }
`;

interface SiteDataProps {
  data: SiteDataQuery;
  pageContext: { siteCode: string; stateCode: string; stateTitle: string };
}

const SiteData: FC<SiteDataProps> = ({
  data,
  pageContext: { siteCode, stateCode, stateTitle },
}) => {
  const { response } = useGetSiteData(siteCode);

  if (!response) return null;

  return (
    <PageLayout data={data}>
      <DataDisclaimer />
      <SiteRiverDataSection
        responseData={response}
        siteCode={siteCode}
        stateCode={stateCode}
        stateTitle={stateTitle}
      />
    </PageLayout>
  );
};

export default SiteData;

export const Head: FC<SiteDataProps> = ({
  pageContext: { stateCode, siteCode },
}) => (
  <title>
    {stateCode.toUpperCase()} {siteCode}
  </title>
);
