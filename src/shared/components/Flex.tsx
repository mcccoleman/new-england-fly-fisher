import styled from "styled-components";

interface FlexProps {
  alignItems?: "stretch" | "center" | "start" | "end";
  justifyContent?:
    | "start"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  column?: boolean;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  align-items: ${({ alignItems }) => alignItems || "unset"};
  justify-content: ${({ justifyContent }) => justifyContent || "unset"};
  flex-direction: ${({ column = false }) => (column ? "column" : "row")};
`;
