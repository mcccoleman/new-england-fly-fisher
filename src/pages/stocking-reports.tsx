import type { HeadFC, PageProps } from "gatsby";
import React, { FC } from "react";
import { PageLayout } from "src/components/page-layout";
import { graphql } from "gatsby";
import { StockingReportQueryQuery as StockingReportQuery } from "graphql-types";
import { ResponsiveFlex } from "src/components/flex";
import styled from "styled-components";
import { PrimaryCard, SecondaryCard } from "src/components/cards";
import { STOCKING_REPORT_CONTENT } from "src/page-content/stocking-reports/content";
import { Paragraph } from "src/components/typography";

const StyledSecondaryCard = styled(SecondaryCard)`
  @media (max-width: 600px) {
    margin-top: 40px;
  }
`;

const StyledA = styled.a`
  color: inherit;
  text-decoration: none;
`;

const StyledPrimaryCard = styled(PrimaryCard)`
  max-width: 50%;

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const stockingReportQuery = graphql`
  query StockingReportQuery {
    ...PageLayout
  }
`;

interface StockingReportsProps extends PageProps {
  data: StockingReportQuery;
}

const StockingReports: FC<StockingReportsProps> = ({ data }) => (
  <PageLayout data={data} titleOverride="Stocking Reports">
    <ResponsiveFlex justifyContent="space-between" alignItems="start">
      <StyledPrimaryCard column>
        Stocking fish is a controversial topic among some fly fishers. That
        said, many watch stocking reports to know when and where they'll have a
        good chance of catching fish. The provided links are here to help those
        searching for easy-to-catch fish.
      </StyledPrimaryCard>
      <StyledSecondaryCard column>
        <Paragraph>
          <u>State-Specific Stocking Details</u>
        </Paragraph>
        {STOCKING_REPORT_CONTENT.map(({ state, links }) => (
          <>
            <Paragraph>{state}</Paragraph>
            <ul>
              {links.map(({ title, link }) => (
                <StyledA href={link} key={link}>
                  <li>{title}</li>
                </StyledA>
              ))}
            </ul>
          </>
        ))}
      </StyledSecondaryCard>
    </ResponsiveFlex>
  </PageLayout>
);

export default StockingReports;

export const Head: HeadFC = () => <title>Stocking Reports</title>;
