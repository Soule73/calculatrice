import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    VitePWA({
      includeAssets: ["logo.svg", "meta-tags.png"],
      injectRegister: "auto",
      registerType: "autoUpdate",
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ["**/*.{svg,html,css,js,gif,png,txt}"],
        maximumFileSizeToCacheInBytes: 60000000,
      },
      manifest: {
        short_name: "SDS Calculatrice",
        name: "SDS Calculatrice",
        lang: "fr-FR",
        icons: [
          {
            src: "logo192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "logo192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "logo512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "logo512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "logo512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "monochrome",
          },
        ],
        categories: ["network", "Chat"],
        id: "/",
        start_url: "/",
        display: "standalone",
        theme_color: "#ffffff",
        description: "SDS Calculatrice : Réseaux Chat de SDS ",
        background_color: "#ffffff",
        scope: "/",
        display_override: ["window-controls-overlay"],
        shortcuts: [
          {
            name: "SDS Calculatrice",
            url: "/",
            short_name: "SDS Calculatrice",
            description: "SDS Calculatrice : Réseaux Chat de SDS ",
            icons: [
              {
                src: "logo192.png",
                sizes: "192x192",
              },
            ],
          },
        ],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
  server: {
    port: 4000,
  },
});
