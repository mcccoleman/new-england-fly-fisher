import type { GatsbyConfig } from "gatsby";
const path = require(`path`);

const config: GatsbyConfig = {
  siteMetadata: {
    title: `new-england-fly-fisher`,
    siteUrl: `https://www.newenglandflyfisher.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-graphql-codegen",
    "gatsby-plugin-root-import",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `static`, `images`),
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "static/images/logo.png",
      },
    },
  ],
};

export default config;
