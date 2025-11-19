import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "./static",
  base: "/",
  // Removendo a configuração 'css.postcss' daqui, pois o Vite detectará 'postcss.config.js'
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@/data": path.resolve(__dirname, "src/data"),
    },
  },
});
