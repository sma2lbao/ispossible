import { defineConfig } from "vite";
import stylexPlugin from "@stylexjs/rollup-plugin";

// 专为docs配置
export default defineConfig({
  plugins: [
    stylexPlugin({
      fileName: "stylex-bundle.css",
    }),
  ],
  build: {
    // outDir: "./public/storybook",
  },
});
