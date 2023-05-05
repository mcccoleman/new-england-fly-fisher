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
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: [],
        pageTransitionDelay: 0,
        defer: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "www.newenglandflyfisher.com",
        enableWebVitalsTracking: true,
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
