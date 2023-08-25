import type { GatsbyNode } from "gatsby";
import axios from "axios";

const path = require(`path`);

const stateDetails = [
  { stateCode: "ct", stateTitle: "Connecticut" },
  { stateCode: "me", stateTitle: "Maine" },
  { stateCode: "ma", stateTitle: "Massachusetts" },
  { stateCode: "nh", stateTitle: "New Hampshire" },
  { stateCode: "ri", stateTitle: "Rhode Island" },
  { stateCode: "vt", stateTitle: "Vermont" },
];

export const createPages: GatsbyNode["createPages"] = async ({
  actions: { createPage },
}) => {
  stateDetails.forEach(({ stateCode, stateTitle }) => {
    createPage({
      path: `/river-data/${stateCode}`,
      component: path.resolve(`src/templates/RiversInState.tsx`),
      context: { stateCode, stateTitle },
    });
  });

  const fetchStateData = (stateCode: string) =>
    axios.get(`${process.env.GATSBY_RIVER_DATA_ENDPOINT}/state/${stateCode}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers":
          "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset, boundary, Content-Length",
      },
    });

  for (const { stateCode, stateTitle } of stateDetails) {
    const resp = await fetchStateData(stateCode);

    const sites = resp.data;

    for (const site of sites) {
      const siteCode = site.sourceInfo.siteCode[0].value;
      const siteName = site.sourceInfo.siteName;
      createPage({
        path: `/river-data/${stateCode}/${siteCode}`,
        component: path.resolve("src/templates/SiteData.tsx"),
        context: { stateCode, stateTitle, siteCode, siteName },
      });
    }
  }
};
