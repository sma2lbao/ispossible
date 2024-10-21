import type { StorybookConfig } from "@storybook/react-vite";
import { join, dirname } from "path";
import { mergeConfig } from "vite";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string) {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: [
    "../docs/pages/**/*.mdx",
    "../docs/**/*.stories.@(ts|tsx)",
    "../components/**/*.stories.@(ts|tsx)",
  ],
  addons: [
    // 用于在 Storybook 中创建链接
    getAbsolutePath("@storybook/addon-links"),
    // 提供一系列常用的功能，如文档、控制台、视角调整等。
    getAbsolutePath("@storybook/addon-essentials"),
    // 支持测试组件的交互行为。
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
  core: {
    enableCrashReports: false,
    builder: {
      name: "@storybook/builder-vite",
      options: {
        viteConfigPath: join(__dirname, "../vite.config.ts"),
      },
    },
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // bug: https://github.com/rollup/rollup/issues/4699
      build: {
        chunkSizeWarningLimit: 1000,
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
