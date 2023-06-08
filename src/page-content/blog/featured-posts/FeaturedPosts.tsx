import React, { FC } from "react";
import { graphql } from "gatsby";
import { FeaturedPostsFragmentFragment as FeaturedPostsFragment } from "graphql-types";
import { H2 } from "src/components/typography";
import { Flex } from "src/components/flex";
import styled from "styled-components";
import { FeaturedPost } from "./FeaturedPost";

const StyledFlex = styled(Flex)`
  width: 100%;
  gap: 20px;
`;

export const featuredPostsFragment = graphql`
  fragment FeaturedPostsFragment on Query {
    allContentfulPosts(sort: { publishDate: ASC }, limit: 10) {
      edges {
        ...FeaturedPostFragment
      }
    }
  }
`;

interface FeaturedPostsProps {
  data: FeaturedPostsFragment;
}

export const FeaturedPosts: FC<FeaturedPostsProps> = ({ data }) => (
  <StyledFlex column>
    <H2>Featured Posts:</H2>
    {data.allContentfulPosts.edges.map((edge) => (
      <FeaturedPost data={edge} key={edge.node.id} />
    ))}
  </StyledFlex>
);
