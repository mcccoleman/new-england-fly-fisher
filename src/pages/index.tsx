import type { HeadFC, PageProps } from "gatsby";
import React, { FC } from "react";
import { PageLayout } from "src/components/page-layout";
import { graphql } from "gatsby";
import { IndexQueryQuery as IndexQuery } from "graphql-types";

export const indexQuery = graphql`
  query IndexQuery {
    ...PageLayout
  }
`;

interface IndexProps extends PageProps {
  data: IndexQuery;
}

const IndexPage: FC<IndexProps> = ({ data }) => (
  <PageLayout data={data}></PageLayout>
);

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
