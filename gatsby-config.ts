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
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-plugin-react-leaflet",
      options: {
        linkStyles: true,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    `gatsby-plugin-image`,
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
        codegen: true,
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

    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "static/images/logo.png",
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
  ],
};

export default config;
