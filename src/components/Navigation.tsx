import React, { FC } from "react";
import styled from "styled-components";

const NavigationWrapper = styled.div`
  background: black;
  height: 25px;
`;

interface NavigationProps {}

export const Navigation: FC<NavigationProps> = () => (
  <NavigationWrapper>Nav bar!</NavigationWrapper>
);
