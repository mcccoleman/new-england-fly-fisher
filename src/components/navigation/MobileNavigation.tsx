import React, { FC, useState, useRef } from "react";
import { NAVIGATION_LINKS } from "./navigationUtils";
import { HamburgerMenu } from "./HamburgerMenu";
import styled from "styled-components";
import { Flex } from "../flex";
import { H4 } from "../typography";
import { StyledLink } from "./shared";
import { useOutsideClick } from "src/hooks/useOutsideClick";

const StyledH4 = styled(H4)`
  cursor: pointer;
`;

const MobileNavigationWrapper = styled(Flex)`
  display: none;

  @media (max-width: 600px) {
    display: block;
  }
`;

interface MobileNavLinkOptionsProps {
  ref: React.MutableRefObject<undefined>;
}

const MobileNavLinkOptions = styled(Flex)<MobileNavLinkOptionsProps>`
  background: white;
  position: fixed;
  right: 0;
  top: 0;
`;

const StyledHamburgerMenuWrapper = styled(Flex)`
  position: relative;
  right: 10px;
  top: -50px;
`;

interface MobileNavigationProps {}

export const MobileNavigation: FC<MobileNavigationProps> = () => {
  const impactRef = useRef<any>(null);
  const [isOpen, setOpen] = useState(false);

  useOutsideClick(impactRef, () => setOpen(false));

  return (
    <MobileNavigationWrapper>
      {isOpen ? (
        <MobileNavLinkOptions
          ref={
            impactRef as unknown as ((
              instance: HTMLDivElement | null
            ) => void) &
              React.MutableRefObject<undefined>
          }
        >
          {NAVIGATION_LINKS.map(({ link, title }) => (
            <StyledLink to={link} key={title}>
              <StyledH4>{title}</StyledH4>
            </StyledLink>
          ))}
        </MobileNavLinkOptions>
      ) : (
        <StyledHamburgerMenuWrapper>
          <HamburgerMenu setOpen={setOpen} />
        </StyledHamburgerMenuWrapper>
      )}
    </MobileNavigationWrapper>
  );
};
