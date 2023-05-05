import type { GatsbyConfig } from "gatsby";
const path = require(`path`);

require("dotenv").config({
  path: `.env`,
});

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
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GOOGLE_ANALYTICS_TRACKING_ID],
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-graphql-codegen",
      options: {
        codegen: false,
      },
    },
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
