// @ts-check
const path = require('path');
const stylexPlugin = require('@stylexjs/nextjs-plugin');

const babelrc = require('./.babelrc.js');
const plugins = babelrc.plugins;
const [_name, options] = plugins.find(
  (plugin) => Array.isArray(plugin) && plugin[0] === '@stylexjs/babel-plugin',
);
const rootDir = options.unstable_moduleResolution.rootDir ?? __dirname;
const aliases = options.aliases ?? undefined;
const useCSSLayers = options.useCSSLayers ?? undefined;
/** @type {import('next').NextConfig} */
module.exports = stylexPlugin({ rootDir, aliases, useCSSLayers })({
  transpilePackages: ['@stylexjs/open-props'],
   // Configure `pageExtensions` to include MDX files
   pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
   // Optionally, add any other Next.js config below
  //  transpilePackages: ['@design/core', '@design/pro', '@design/icon'],
});


