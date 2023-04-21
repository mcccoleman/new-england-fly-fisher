import React, { FC, PropsWithChildren } from "react";

import "./pageLayout.css";
import { Header } from "../header";
import styled from "styled-components";
import { Flex } from "src/shared/components/Flex";

const PageLayoutWrapper = styled(Flex)`
  padding: 10px 150px;

  @media (max-width: 600px) {
    padding: 10px 10px;
  }

  background-color: #6e8fc5;
`;

interface LayoutProps extends PropsWithChildren {}

export const PageLayout: FC<LayoutProps> = ({ children }) => (
  <PageLayoutWrapper column>
    <Header />
    {children}
  </PageLayoutWrapper>
);
