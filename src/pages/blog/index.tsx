import type { HeadFC, PageProps } from "gatsby";
import React, { FC } from "react";
import { PageLayout } from "src/components/page-layout";
import { graphql } from "gatsby";
import { BlogQueryQuery } from "graphql-types";
import { FeaturedPosts } from "src/page-content/blog/featured-posts/FeaturedPosts";

export const blogQuery = graphql`
  query BlogQuery {
    ...PageLayout
    ...FeaturedPostsFragment
  }
`;

interface BlogProps extends PageProps {
  data: BlogQueryQuery;
}

const Blog: FC<BlogProps> = ({ data }) => (
  <PageLayout data={data} titleOverride="Blog">
    <FeaturedPosts data={data} />
  </PageLayout>
);

export default Blog;

export const Head: HeadFC = () => <title>Blog</title>;
