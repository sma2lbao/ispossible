// @ts-check
const stylexPlugin = require("@stylexjs/nextjs-plugin");
const STORYBOOK_IFRAME_DOMAIN =
  process.env.NODE_ENV === "development"
    ? "http://localhost:6006"
    : "https://design-core.vercel.app";

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

module.exports = stylexPlugin({
  filename: "stylex-bundle.css",
  rootDir: __dirname,
  useCSSLayers: true,
})(nextConfig);
