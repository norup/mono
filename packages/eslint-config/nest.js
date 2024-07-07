const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "turbo",
  ],

  env: {
    node: true,
    browser: true,
  },
  plugins: [
    "only-warn",
    "simple-import-sort",
    "@typescript-eslint/eslint-plugin",
  ],
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  rules: {
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
  ignorePatterns: [".eslintrc.js"],

  overrides: [{ files: ["*.js?(x)", "*.ts?(x)"] }],
};
