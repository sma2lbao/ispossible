import type { StorybookConfig } from "@storybook/react-vite";

import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: [
    "../../design-core/docs/**/*.mdx",
    "../../design-core/docs/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  core: {
    enableCrashReports: false,
  },
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
  staticDirs: ["..\\public"],
};
export default config;
