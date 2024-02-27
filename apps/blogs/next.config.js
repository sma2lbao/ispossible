// @ts-check
const stylexPlugin = require('@stylexjs/nextjs-plugin');
const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = stylexPlugin({
  aliases: {
    '@/*': [path.join(__dirname, '*')],
  },
  rootDir: __dirname,
})({
  transpilePackages: ['@stylexjs/open-props'],
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
   // Optionally, add any other Next.js config below
  // output: "export"
});


