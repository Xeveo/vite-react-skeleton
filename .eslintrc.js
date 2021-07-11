module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    "jest/globals": true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
  ],
  plugins: ["@typescript-eslint", "react", "react-hooks", "jest"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "@typescript-eslint/no-unused-vars": "warn",
    "no-unused-vars": "off",
  },
};
