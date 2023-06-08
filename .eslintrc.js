module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: "react-app",
  plugins: ["unused-imports"],
  rules: {
    "react/no-unescaped-entities": 0,
    "unused-imports/no-unused-imports": "error",
    "no-console": "error",
  },
};
