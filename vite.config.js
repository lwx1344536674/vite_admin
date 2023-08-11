import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsxPlugin from "@vitejs/plugin-vue-jsx";
import process from "node:process";
import setupExtend from "vite-plugin-vue-setup-extend";

import path from "path";
// https://vitejs.dev/config/
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

export default defineConfig(({ mode }) => {
  const { VITE_APP_BASE_API } = loadEnv(mode, process.cwd());
  return {
    plugins: [
      vue(),
      vueJsxPlugin(),
      setupExtend(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
        // imports: ["vue", "vue-router", "pinia"],
      }),
      Components({ resolvers: [ElementPlusResolver()] }),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "src/assets/icons/svg")],
        symbolId: "icon-[dir]-[name]",
      }),
    ],
    resolve: {
      alias: {
        "@": path.resolve("./src"),
      },
    },
    server: {
      proxy: {
        "/api": {
          target: VITE_APP_BASE_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
        "/admin": {
          target: VITE_APP_BASE_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/admin/, ""),
        },
        "/auth": {
          target: VITE_APP_BASE_API,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/admin/, ""),
        },
      },
    },
    css: {
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          // additionalData: `@import "@/assets/styles/element-variables.scss";`,
        },
      },
    },
  };
});
