import React, { FC } from "react";
import styled from "styled-components";
import { Flex } from "src/shared/components/Flex";
import Img from "gatsby-image";
import { graphql } from "gatsby";
import { HeaderFragment, GatsbyImageSharpFixedFragment } from "graphql-types";

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

const StyledH1 = styled.h1`
  margin-left: 20px;
`;

interface HeaderProps {
  data: HeaderFragment;
}

export const Header: FC<HeaderProps> = ({ data }) => {
  if (!data?.file?.childImageSharp?.fixed) return null;
  return (
    <Flex alignItems="center">
      <StyledLogoWrapper>
        <Img
          // @ts-ignore: Gatsby image seems inaccurately typed
          fixed={data?.file?.childImageSharp?.fixed}
          alt="New England Fly  Fisher"
        />
      </StyledLogoWrapper>
      <StyledH1>New England Fly Fisher</StyledH1>
    </Flex>
  );
};
