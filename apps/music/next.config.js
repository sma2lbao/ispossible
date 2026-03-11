// eslint-disable-next-line @typescript-eslint/no-var-requires
const stylexPlugin = require("@stylexswc/nextjs-plugin");
const sentry = require("@sentry/nextjs");

/** @type {import('next').NextConfig} */
const nextConfig = sentry.withSentryConfig(
  {
    pageExtensions: ["js", "jsx", "ts", "tsx"],
  },
  {
    org: "sma2lbao-27",
    project: "music",
    // Only print logs for uploading source maps in CI
    // silent: !process.env.CI,
    // Webpack-specific options for Pages Router
    webpack: {
      // Auto-instrument API routes and data fetching methods (default: true)
      autoInstrumentServerFunctions: true,
      // Auto-instrument middleware (default: true)
      autoInstrumentMiddleware: true,
      // Tree-shake Sentry logger statements to reduce bundle size
      treeshake: {
        removeDebugLogging: true,
      },
    },
  },
);

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
