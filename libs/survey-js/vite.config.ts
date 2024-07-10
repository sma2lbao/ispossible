import { defineConfig } from "vite";
import { resolve } from "path";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [dts({ rollupTypes: true })],

  build: {
    assetsInlineLimit: 1024 * 100,
    lib: {
      entry: resolve(__dirname, "./src/main.ts"),
      name: "SurveyJS",
      fileName: "survey",
      formats: ["umd", "es"],
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {},
      },
    },
    outDir: "lib",
  },
});
