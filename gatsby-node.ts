import type { GatsbyNode } from "gatsby";

const path = require(`path`);

const stateDetails = [
  { stateCode: "ct", stateTitle: "Connecticut" },
  { stateCode: "me", stateTitle: "Maine" },
  { stateCode: "ma", stateTitle: "Massachusetts" },
  { stateCode: "nh", stateTitle: "New Hampshire" },
  { stateCode: "ri", stateTitle: "Rhode Island" },
  { stateCode: "vt", stateTitle: "Vermont" },
];

export const createPages: GatsbyNode["createPages"] = async ({ actions }) => {
  const { createPage } = actions;
  const riversInStateTemplate = path.resolve(`src/templates/RiversInState.tsx`);

  stateDetails.forEach(({ stateCode, stateTitle }) => {
    createPage({
      path: `/river-data/${stateCode}`,
      component: riversInStateTemplate,
      context: { stateCode, stateTitle },
    });
  });
};
