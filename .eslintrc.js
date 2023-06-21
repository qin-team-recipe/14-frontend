module.exports = {
  env: {
    es2022: true,
  },
  extends: ["next/core-web-vitals", "prettier"],
  rules: {
    "no-undef": "error",
    "react/prop-types": "error",
    "react/jsx-props-no-spreading": "off",
  },
};
