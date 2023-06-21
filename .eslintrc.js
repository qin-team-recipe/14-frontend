module.exports = {
  env: {
    es2021: true,
  },
  extends: ["next/core-web-vitals", "eslint:recommended", "prettier"],
  parserOptions: {
    sourceType: "module",
  },
  rules: {
    "no-var": "error",
  },
};
