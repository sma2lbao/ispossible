import { defineConfig } from "vite";
import { stylexPlugin } from "vite-plugin-stylex-dev";

export default defineConfig({
  // 'use client' bug
  logLevel: "silent",
  plugins: [stylexPlugin()],
});
