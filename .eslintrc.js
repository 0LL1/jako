module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
    extraFileExtensions: [".svelte"],
  },
  plugins: ["@typescript-eslint", "svelte3"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint",
  ],
  overrides: [
    {
      files: ["**/*.svelte"],
      processor: "svelte3/svelte3",
    },
  ],
  root: true,
  env: {
    es2020: true,
    browser: true,
    node: true,
  },
};
