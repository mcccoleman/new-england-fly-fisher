import React, { FC } from "react";
import { graphql } from "gatsby";
import { PageLayout } from "src/components/page-layout";
import { BlogPostPageQuery } from "graphql-types";
import { PrimaryCard } from "src/components/cards";
import { H1, H3, Markdown, Paragraph } from "src/components/typography";
import { Flex } from "src/components/flex";

interface BlogPostProps {
  data: BlogPostPageQuery;
}

const BlogPost: FC<BlogPostProps> = ({ data, data: { contentfulPost } }) => (
  <PageLayout data={data} titleOverride="Blog">
    <PrimaryCard column>
      <Flex justifyContent="space-between" alignItems="center">
        <H1>{contentfulPost?.title}</H1>
        <Paragraph>{contentfulPost?.publishDate}</Paragraph>
      </Flex>
      <Markdown html={contentfulPost?.postBody?.childMarkdownRemark?.html} />
      <H3>Author: {contentfulPost?.author}</H3>
    </PrimaryCard>
  </PageLayout>
);

export const query = graphql`
  query BlogPostPage($route: String) {
    ...PageLayout
    contentfulPost: contentfulPosts(route: { eq: $route }) {
      id
      route
      title
      publishDate(formatString: "MMMM DD, YYYY")
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
