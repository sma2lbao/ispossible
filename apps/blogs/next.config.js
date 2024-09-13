// @ts-check
const stylexPlugin = require("@stylexjs/nextjs-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  // Optionally, add any other Next.js config below
  //  output: 'standalone',
};

module.exports = stylexPlugin({
  filename: "stylex-bundle.css",
  rootDir: __dirname,
  useCSSLayers: true,
})(nextConfig);
