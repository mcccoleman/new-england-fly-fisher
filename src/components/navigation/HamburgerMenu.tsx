import React, { FC, Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface StyledDivProps {
  onClick: () => void;
}

const StyledDiv = styled.div<StyledDivProps>`
  cursor: pointer;
  span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;

    background: white;
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
`;

interface HamburgerMenuProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const HamburgerMenu: FC<HamburgerMenuProps> = ({ setOpen }) => (
  <StyledDiv id="menuToggle" onClick={() => setOpen(true)}>
    <span></span>
    <span></span>
    <span></span>
  </StyledDiv>
);
