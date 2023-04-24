import styled from "styled-components";
import { Flex } from "./Flex";

export const ResponsiveFlex = styled(Flex)`
  @media (max-width: 600px) {
    display: block;
  }
`;
