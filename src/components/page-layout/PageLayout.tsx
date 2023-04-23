import React, { FC, PropsWithChildren } from "react";

import "./pageLayout.css";
import { Header } from "../header";
import styled from "styled-components";
import { Flex } from "src/shared/components/Flex";
import { graphql } from "gatsby";
import { PageLayoutFragment } from "graphql-types";

export const pageLayout = graphql`
  fragment PageLayout on Query {
    ...Header
  }
`;

const PageLayoutWrapper = styled(Flex)`
  padding: 10px 150px;

  @media (max-width: 600px) {
    padding: 10px 10px;
  }

  background-color: #6e8fc5;
`;

interface LayoutProps extends PropsWithChildren {
  data: PageLayoutFragment;
}

export const PageLayout: FC<LayoutProps> = ({ data, children }) => (
  <PageLayoutWrapper column>
    <Header data={data} />
    {children}
  </PageLayoutWrapper>
);
