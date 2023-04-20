import * as React from "react";
import { HeadFC, PageProps } from "gatsby";

const NotFoundPage: React.FC<PageProps> = () => <>Page not found</>;

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
