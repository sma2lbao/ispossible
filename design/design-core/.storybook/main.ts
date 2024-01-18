import type { StorybookConfig } from "@storybook/react-webpack5";
import StylexPlugin from "@stylexjs/webpack-plugin";
import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: ["../docs/**/*.mdx", "../docs/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"),
    options: {
      builder: {
        useSWC: true,
      },
    },
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    config.module = config.module || {};
    config.module.rules = config.module.rules || [];

    config.plugins = config.plugins || [];
    config.plugins.push(
      new StylexPlugin({
        // get webpack mode and set value for dev
        dev: config.mode === "development",
        // Required for CSS variable support
        appendTo: "head",
        unstable_moduleResolution: {
          // The module system to be used.
          // Use this value when using `ESModules`.
          type: "commonJS",
          // The absolute path to the root directory of your project.
          rootDir: __dirname,
        },
      })
    );

    return config;
  },
};
export default config;
