const { defineConfig } = require("eslint-define-config");
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = defineConfig({
  root: true,
  parser: "@babel/eslint-parser",
  parserOptions: {
    sourceType: "module",
    requireConfigFile: false,
    babelOptions: {
      presets: [require.resolve("babel-preset-react-app/prod")],
    },
  },
  env: {
    node: true,
    es6: true,
    browser: true,
    commonjs: true,
  },
  plugins: ["react", "import", "react-hooks"],
  extends: ["plugin:import/typescript"],
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        // typescript-eslint specific options
        warnOnUnsupportedTypeScriptVersion: true,
      },
      plugins: ["@typescript-eslint"],
      rules: {
        // TypeScript's `noFallthroughCasesInSwitch` option is more robust (#6906)
        "default-case": "off",
        // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/291)
        "no-dupe-class-members": "off",
        // 'tsc' already handles this (https://github.com/typescript-eslint/typescript-eslint/issues/477)
        "no-undef": "off",

        // Add TypeScript specific rules (and turn off ESLint equivalents)
        "@typescript-eslint/consistent-type-assertions": "warn",
        "no-array-constructor": "off",
        "@typescript-eslint/no-array-constructor": "warn",
        "no-redeclare": "off",
        "@typescript-eslint/no-redeclare": "warn",
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": [
          "warn",
          {
            functions: false,
            classes: false,
            variables: false,
            typedefs: false,
          },
        ],
        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": [
          "error",
          {
            allowShortCircuit: true,
            allowTernary: true,
            allowTaggedTemplates: true,
          },
        ],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            args: "none",
            ignoreRestSiblings: true,
          },
        ],
        "no-useless-constructor": "off",
        "@typescript-eslint/no-useless-constructor": "warn",
      },
    },
  ],
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
            pattern: "react*",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "{.,..}/**/*.css",
            group: "type",
            position: "after",
          },
        ],
        alphabetize: { order: "asc" },
        warnOnUnassignedImports: false,
      },
    ],
    "import/no-unresolved": ["error", { ignore: ["@design/icon/*"] }], // 确保导入的模块有效
  },
});
