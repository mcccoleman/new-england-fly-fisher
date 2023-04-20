import type { HeadFC, PageProps } from "gatsby";
import * as React from "react";
import { PageLayout } from "src/components/page-layout";

const IndexPage: React.FC<PageProps> = () => <PageLayout></PageLayout>;

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
