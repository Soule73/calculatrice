import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    splitVendorChunkPlugin(),
    VitePWA({
      includeAssets: ["**/*"],
      injectRegister: "auto",
      registerType: "autoUpdate",
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        globPatterns: ["**/*"],
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
        theme_color: "#22c55e",
        description: "SDS Calculatrice : Réseaux Chat de SDS ",
        background_color: "#22c55e",
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
