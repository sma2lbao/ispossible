// @ts-check
// const stylexPlugin = require("@stylexjs/nextjs-plugin");
const stylexPlugin = require("@stylexswc/nextjs-plugin");

const STORYBOOK_IFRAME_DOMAIN =
  process.env.NODE_ENV === "development"
    ? "http://localhost:6006"
    : "https://design-core.sma1lbao.cn";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/storybook/:path*",
          destination: STORYBOOK_IFRAME_DOMAIN + "/:path*",
          basePath: false,
        },
      ],
      afterFiles: [],
      fallback:
        process.env.NODE_ENV === "development"
          ? [
              {
                source: "/:path*",
                destination: STORYBOOK_IFRAME_DOMAIN + "/:path*",
                basePath: false,
              },
            ]
          : [],
    };
  },
};

// @ts-ignore
module.exports = stylexPlugin({
  rootDir: __dirname,
  dev: process.env.NODE_ENV === "development",
  genConditionalClasses: true,
  treeshakeCompensation: true,
  unstable_moduleResolution: {
    type: "commonJS",
    rootDir: __dirname,
  },
})(nextConfig);
