import React from "react";
import logo from "./logo.png";
import styled from "styled-components";
import { Flex } from "src/shared/components/Flex";

export const StyledLogo = styled.img`
  width: 150px;
  height: 150px;
`;

const StyledH1 = styled.h1`
  margin-left: 20px;
`;

export const Header = () => (
  <Flex alignItems="center">
    <StyledLogo src={logo} alt="Logo" />
    <StyledH1>New England Fly Fisher</StyledH1>
  </Flex>
);
