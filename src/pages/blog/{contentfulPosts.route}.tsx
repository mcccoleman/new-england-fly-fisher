import React, { FC } from "react";
import { graphql } from "gatsby";
import { PageLayout } from "src/components/page-layout";
import { BlogPostPageQuery } from "graphql-types";
import { PrimaryCard } from "src/components/cards";
import { H1, H3, Markdown } from "src/components/typography";

interface BlogPostProps {
  data: BlogPostPageQuery;
}

const BlogPost: FC<BlogPostProps> = ({ data, data: { contentfulPosts } }) => (
  <PageLayout data={data} titleOverride="Blog">
    <PrimaryCard column>
      <H1>{contentfulPosts?.title}</H1>
      <Markdown html={contentfulPosts?.postBody?.childMarkdownRemark?.html} />
      <H3>Author: {contentfulPosts?.author}</H3>
    </PrimaryCard>
  </PageLayout>
);

export const query = graphql`
  query BlogPostPage($route: String) {
    ...PageLayout
    contentfulPosts(route: { eq: $route }) {
      id
      route
      title
      postBody {
        childMarkdownRemark {
          html
        }
      }
      author
    }
  }
`;

export default BlogPost;
