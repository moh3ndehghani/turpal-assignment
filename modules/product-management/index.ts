import { resolve, join  , dirname} from "path";
import type { Nuxt } from "@nuxt/schema";
import { fileURLToPath } from 'url'
import { defineNuxtModule, addComponent , addLayout } from '@nuxt/kit'

export default defineNuxtModule({
  meta: {
    name: "product-management-module",
    configKey: "product-management",
  },

  setup(options: any, nuxt: Nuxt) {
    // nuxt.hook("components:dirs", (dirs) => {
    //   dirs.push({
    //     path: join(__dirname, "components"),
    //   });
    // });
    // nuxt.hook("imports:dirs", (dirs) => {
    //   dirs.push(resolve(__dirname, "./composables"));
    // });

    addLayout({
      src: resolve(__dirname, './layouts/default.vue'),
      filename: 'default.vue'
    }, 'product-default')

    nuxt.hook("pages:extend", (pages) => {
      pages.push({
        name: "product-management",
        path: "/product-management",
        file: resolve(__dirname, "./pages/index.vue"),
        meta: {layout: "product-default"}
      });
    });
  },
});
