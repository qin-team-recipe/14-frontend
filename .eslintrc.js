module.exports = {
  env: {
    es2022: true,
  },
  extends: ["next/core-web-vitals", "prettier"],
  rules: {
    "no-undef": "error",
    "react/jsx-props-no-spreading": "off",
  },
};
