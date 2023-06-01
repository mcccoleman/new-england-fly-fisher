import React, { FC } from "react";
import { graphql } from "gatsby";
import { FeaturedPostFragmentFragment as FeaturedPostFragment } from "graphql-types";
import { PrimaryCard } from "src/components/cards";
import { H4, Markdown, Paragraph } from "src/components/typography";
import styled from "styled-components";
import { StyledLink } from "src/components/navigation/shared";

const StyledCard = styled(PrimaryCard)`
  cursor: pointer;
`;

export const featuredPostFragment = graphql`
  fragment FeaturedPostFragment on ContentfulPostsEdge {
    node {
      id
      title
      route
      excerpt {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

interface FeaturedPostProps {
  data: FeaturedPostFragment;
}

export const FeaturedPost: FC<FeaturedPostProps> = ({
  data: {
    node: { id, title, excerpt, route },
  },
}) => (
  <StyledLink to={route || ""}>
    <StyledCard column key={id}>
      <H4>{title}</H4>
      <Paragraph>
        <Markdown html={excerpt?.childMarkdownRemark?.html} />
      </Paragraph>
    </StyledCard>
  </StyledLink>
);
