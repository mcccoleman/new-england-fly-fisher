import React, { FC } from "react";
import { NAVIGATION_LINKS } from "./navigationUtils";
import { Flex } from "../flex";
import styled from "styled-components";
import { H4 } from "../typography";
import { StyledLink } from "./shared";
import { useLocation } from "@reach/router";

interface StyledH4Props {
  isCurrentPath: boolean;
}

const StyledH4 = styled(H4)<StyledH4Props>`
  color: white;
  cursor: pointer;
  text-decoration: ${({ isCurrentPath }) =>
    isCurrentPath ? "underline" : "unset"};

  text-decoration-thickness: 3px;
  text-underline-offset: 8px;
`;

const DesktopNavigationWrapper = styled(Flex)`
  @media (max-width: 600px) {
    display: none;
  }
  gap: 20px;
`;

interface DesktopNavigationProps {}

export const DesktopNavigation: FC<DesktopNavigationProps> = () => {
  const location = useLocation();
  console.log(location);
  return (
    <DesktopNavigationWrapper alignItems="end" justifyContent="center">
      {NAVIGATION_LINKS.map(({ link, title }) => (
        <StyledLink to={link} key={title}>
          <StyledH4 isCurrentPath={location.pathname.includes(link)}>
            {title}
          </StyledH4>
        </StyledLink>
      ))}
    </DesktopNavigationWrapper>
  );
};
