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
  white-space: nowrap;
`;

const OuterMobileNavigationWrapper = styled(Flex)`
  position: absolute;
  top: 0;
  right: 0;
`;

const MobileNavigationWrapper = styled(Flex)`
  position: relative;
  display: none;

  @media (max-width: 600px) {
    display: block;
  }
`;

interface MobileNavLinkOptionsProps {
  ref: React.MutableRefObject<undefined>;
}

const MobileNavLinkOptions = styled(Flex)<MobileNavLinkOptionsProps>`
  position: absolute;
  background: white;
  right: 0;
  top: 0;
  padding: 0 20px;
`;

const StyledHamburgerMenuWrapper = styled(Flex)`
  padding: 30px;
`;

interface MobileNavigationProps {}

export const MobileNavigation: FC<MobileNavigationProps> = () => {
  const impactRef = useRef<any>(null);
  const [isOpen, setOpen] = useState(false);

  useOutsideClick(impactRef, () => setOpen(false));

  return (
    <OuterMobileNavigationWrapper>
      <MobileNavigationWrapper>
        {isOpen ? (
          <MobileNavLinkOptions
            ref={
              impactRef as unknown as ((
                instance: HTMLDivElement | null
              ) => void) &
                React.MutableRefObject<undefined>
            }
            column
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
    </OuterMobileNavigationWrapper>
  );
};
