// @ts-check
const stylexPlugin = require("@stylexjs/nextjs-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

module.exports = stylexPlugin({
  filename: "stylex-bundle.css",
  rootDir: __dirname,
  useCSSLayers: true,
})(nextConfig);
