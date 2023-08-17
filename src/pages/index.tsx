import type { HeadFC, PageProps } from "gatsby";
import React, { FC } from "react";
import { PageLayout } from "src/components/page-layout";
import { graphql } from "gatsby";
import { IndexQueryQuery as IndexQuery } from "graphql-types";
import { Flex } from "src/components/flex";
import styled from "styled-components";
import { PrimaryCard } from "src/components/cards";
import { Paragraph } from "src/components/typography";

const StyledFlex = styled(Flex)`
  margin-top: 40px;
`;

export const indexQuery = graphql`
  query IndexQuery {
    ...PageLayout
  }
`;

interface IndexProps extends PageProps {
  data: IndexQuery;
}

const IndexPage: FC<IndexProps> = ({ data }) => (
  <PageLayout data={data}>
    <StyledFlex justifyContent="space-between" gap="40px">
      <PrimaryCard column>
        <Paragraph>Welcome to New England Fly Fisher.</Paragraph>
        <Paragraph>
          This project is somewhat open-ended, but its ultimate goal is to
          celebrate fly fishing in New England.
        </Paragraph>
        <Paragraph>Some possible ideas include the following:</Paragraph>
        <ul>
          <li>River Reports</li>
          <li>Blog Content</li>
          <li>River Webcam</li>
        </ul>
        <Paragraph>
          If you're interested in contributing, please email Michael Coleman at{" "}
          <a href="mailto:colemanmc02@gmail.com.">colemanmc02@gmail.com.</a>
        </Paragraph>
      </PrimaryCard>
    </StyledFlex>
  </PageLayout>
);

export default IndexPage;

export const Head: HeadFC = () => <title>New England Fly Fisher</title>;
