module.exports = {
  parserOptions: {
    sourceType: "module",
  },
  plugins: ["svelte3"],
  extends: ["eslint:recommended", "prettier"],
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
