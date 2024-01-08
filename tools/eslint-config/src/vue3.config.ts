import { defineConfig } from "eslint-define-config";

export = defineConfig({
  env: {
    node: true,
    "vue/setup-compiler-macros": true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "vue", "import"],
  extends: ["plugin:import/typescript"],
  rules: {
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "sibling",
          "parent",
          "index",
          "type",
          "unknown",
        ],
        pathGroups: [
          {
            pattern: "vue*",
            group: "builtin",
            position: "before",
          },
          // {
          //   pattern: "@/**",
          //   group: "external",
          //   position: "after",
          // },
          {
            pattern: "{.,..}/**/*.css",
            group: "type",
            position: "after",
          },
        ],
        "newlines-between": "always",
        alphabetize: { order: "asc" },
        warnOnUnassignedImports: false,
      },
    ],
    "vue/multi-word-component-names": 0,
    "@typescript-eslint/no-explicit-any": "warn",
  },
});
