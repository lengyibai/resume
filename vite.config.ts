import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(({}) => {
  return {
    base: "./",
    plugins: [vue()],
    css: {
      preprocessorOptions: {
        less: {
          additionalData: '@import "./src/styles/index.less";',
        },
      },
    },
    server: {
      host: "0.0.0.0",
      port: 9527,
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: {
      chunkSizeWarningLimit: 2000,
      reportCompressedSize: false,
      cssTarget: "chrome61",
      rollupOptions: {
        output: {
          chunkFileNames: "assets/js/[name]-[hash].js",
          entryFileNames: "assets/js/[name]-[hash].js",
          assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
        },
      },
    },
  };
});
