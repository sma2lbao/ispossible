import { defineConfig } from "eslint-define-config";

export = defineConfig({
  env: {
    node: true,
  },
  plugins: ["@typescript-eslint", "import"],
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
