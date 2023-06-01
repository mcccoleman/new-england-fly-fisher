import React, { FC } from "react";
import { NAVIGATION_LINKS } from "./navigationUtils";
import { Flex } from "../flex";
import styled from "styled-components";
import { H4 } from "../typography";
import { StyledLink } from "./shared";

const StyledH4 = styled(H4)`
  color: white;
  cursor: pointer;
`;

const DesktopNavigationWrapper = styled(Flex)`
  @media (max-width: 600px) {
    display: none;
  }
  gap: 20px;
`;

interface DesktopNavigationProps {}

export const DesktopNavigation: FC<DesktopNavigationProps> = () => (
  <DesktopNavigationWrapper alignItems="end" justifyContent="center">
    {NAVIGATION_LINKS.map(({ link, title }) => (
      <StyledLink to={link} key={title}>
        <StyledH4>{title}</StyledH4>
      </StyledLink>
    ))}
  </DesktopNavigationWrapper>
);
