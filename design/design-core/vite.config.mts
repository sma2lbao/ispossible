import { defineConfig } from "vite";
import styleX from "vite-plugin-stylex";

export default defineConfig({
  plugins: [styleX({})],
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    cors: {
      origin: "*", // 允许所有来源
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
      credentials: true,
    },
  },
});
