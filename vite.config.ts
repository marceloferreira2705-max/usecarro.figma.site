import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: "./static",
  base: "/", // Alterado para caminho base absoluto
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
