import React, { FC } from "react";
import styled from "styled-components";
import { Flex } from "src/components/flex/Flex";
import Img from "gatsby-image";
import { Link, graphql } from "gatsby";
import { HeaderFragment } from "graphql-types";
import { SITE_TITLE } from "./constants";
import { H1 } from "src/components/typography";
import { Navigation } from "../navigation";

export const header = graphql`
  fragment Header on Query {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 150, height: 150, pngQuality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const StyledLogoWrapper = styled(Link)`
  cursor: pointer;
  min-width: 150px;
  min-height: 150px;
`;

const StyledH2 = styled(H1)`
  margin-left: 20px;
  color: white;
`;

const StyledFlex = styled(Flex)`
  width: 100%;
`;

interface HeaderProps {
  data: HeaderFragment;
  titleOverride?: string;
}

export const Header: FC<HeaderProps> = ({ titleOverride, data }) => (
  <StyledFlex justifyContent="space-between" alignItems="center">
    <Flex alignItems="center">
      <StyledLogoWrapper to="/">
        <Img
          // @ts-ignore: Gatsby image seems inaccurately typed
          fixed={data?.file?.childImageSharp?.fixed}
          alt={SITE_TITLE}
        />
      </StyledLogoWrapper>
      <StyledH2>{titleOverride || SITE_TITLE}</StyledH2>
    </Flex>
    <Navigation />
  </StyledFlex>
);
