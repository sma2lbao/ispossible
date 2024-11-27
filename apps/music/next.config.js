// eslint-disable-next-line @typescript-eslint/no-var-requires
const stylexPlugin = require("@stylexswc/nextjs-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx"],
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
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
