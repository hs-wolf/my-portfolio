import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

import Components from "unplugin-vue-components/vite";
import VueRouter from 'unplugin-vue-router/vite'
import vue from "@vitejs/plugin-vue";
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VueRouter(), Components({ directoryAsNamespace: true }), Unocss({})],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
