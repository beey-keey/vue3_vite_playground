import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { VitePWA } from "vite-plugin-pwa";
import ghPages from "vite-plugin-gh-pages";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA(), ghPages()],
  base: "/vue3_vite_playground/", // Replace with your repository name
});
