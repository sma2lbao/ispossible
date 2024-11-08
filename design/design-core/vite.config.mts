import { defineConfig } from "vite";
import styleX from "vite-plugin-stylex";

export default defineConfig({
  plugins: [styleX({})],
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
