import React, { FC } from "react";
import { graphql } from "gatsby";
import { FeaturedPostFragmentFragment as FeaturedPostFragment } from "graphql-types";
import { PrimaryCard } from "src/components/cards";
import { H4, Markdown, Paragraph } from "src/components/typography";
import styled from "styled-components";
import { StyledLink } from "src/components/navigation/shared";
import { Flex } from "src/components/flex";

const StyledCard = styled(PrimaryCard)`
  cursor: pointer;
`;

export const featuredPostFragment = graphql`
  fragment FeaturedPostFragment on ContentfulPostsEdge {
    node {
      id
      title
      route
      publishDate(formatString: "MMMM DD, YYYY")
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
    node: { id, title, excerpt, route, publishDate },
  },
}) => (
  <StyledLink to={route ?? ""}>
    <StyledCard key={id} justifyContent="space-between" alignItems="center">
      <Flex column>
        <H4>{title}</H4>
        <Paragraph>
          <Markdown html={excerpt?.childMarkdownRemark?.html} />
        </Paragraph>
      </Flex>
      <Paragraph>{publishDate}</Paragraph>
    </StyledCard>
  </StyledLink>
);
