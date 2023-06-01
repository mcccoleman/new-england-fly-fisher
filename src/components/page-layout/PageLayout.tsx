import React, { FC, PropsWithChildren } from "react";
import { Header } from "../header";
import styled, { css } from "styled-components";
import { Flex } from "src/components/flex";
import { graphql } from "gatsby";
import { PageLayoutFragment } from "graphql-types";

import "./pageLayout.css";

export const pageLayout = graphql`
  fragment PageLayout on Query {
    ...Header
  }
`;

const sharedPaddingStyles = css`
  padding: 40px 150px 10px;
  @media (max-width: 600px) {
    padding: 10px 10px;
  }
`;

const PageContentWrapper = styled(Flex)`
  ${sharedPaddingStyles}
`;

const HeaderWrapper = styled(Flex)`
  ${sharedPaddingStyles}
  background: url("/images/baxter.jpg");
  background-attachment: fixed;
}
`;

interface LayoutProps extends PropsWithChildren {
  data: PageLayoutFragment;
  titleOverride?: string;
}

export const PageLayout: FC<LayoutProps> = ({
  titleOverride,
  data,
  children,
}) => (
  <Flex column>
    <HeaderWrapper>
      <Header data={data} titleOverride={titleOverride} />
    </HeaderWrapper>
    <PageContentWrapper>{children}</PageContentWrapper>
  </Flex>
);
