// @ts-check
const path = require('path');
const stylexPlugin = require('@stylexjs/nextjs-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  transpilePackages: ['@design/core', '@design/pro', '@design/icon'],
}

const useStylex = stylexPlugin({
  aliases: {
    '@/*': [path.join(__dirname, '*')],
  },
  rootDir: __dirname,
})

module.exports = useStylex(nextConfig)
