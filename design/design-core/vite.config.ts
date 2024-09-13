import { defineConfig } from "vite";
import stylexPlugin from "@stylexjs/rollup-plugin";

export default defineConfig({
  plugins: [
    stylexPlugin({
      fileName: "stylex-bundle.css",
    }),
  ],
});
