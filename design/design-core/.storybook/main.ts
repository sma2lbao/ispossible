import type { StorybookConfig } from "@storybook/react-vite";
import { join, dirname } from "path";
import { mergeConfig } from "vite";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: [
    "../docs/stories/**/*.mdx",
    "../docs/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    check: false,
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // bug: https://github.com/rollup/rollup/issues/4699
      build: {
        chunkSizeWarningLimit: 100,
        rollupOptions: {
          onwarn(warning, warn) {
            if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
              return;
            }
            warn(warning);
          },
          onLog(level, log, defaultHandler) {
            if (
              log.code === "SOURCEMAP_ERROR" ||
              (log.code === "EVAL" && log.message.includes("telejson"))
            ) {
              return;
            }
            defaultHandler(level, log);
          },
        },
      },
    });
  },
};
export default config;
