import React, { FC } from "react";
import styled from "styled-components";
import { Flex } from "src/components/flex/Flex";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import { HeaderFragment } from "graphql-types";
import { SITE_TITLE } from "./constants";
import { H1 } from "src/components/typography";

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

const StyledLogoWrapper = styled(Flex)`
  min-width: 150px;
  min-height: 150px;
`;

const StyledH1 = styled(H1)`
  margin-left: 20px;
  color: white;
`;

interface HeaderProps {
  data: HeaderFragment;
}

export const Header: FC<HeaderProps> = ({ data }) => (
  <Flex alignItems="center">
    <StyledLogoWrapper>
      <Img
        // @ts-ignore: Gatsby image seems inaccurately typed
        fixed={data?.file?.childImageSharp?.fixed}
        alt={SITE_TITLE}
      />
    </StyledLogoWrapper>
    <StyledH1>{SITE_TITLE}</StyledH1>
  </Flex>
);
