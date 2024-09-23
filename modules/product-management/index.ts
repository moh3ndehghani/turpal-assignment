import { defineNuxtModule } from "@nuxt/kit";
import { resolve, join } from "path";
import type { Nuxt } from "@nuxt/schema";
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

    const componentsDir = resolve(__dirname, "components");
    nuxt.hook("components:dirs", (dirs) => {
      dirs.push({
        path: componentsDir,
        prefix: "ProductManagement",
      });
    });

    nuxt.hook("pages:extend", (pages) => {
      pages.push({
        name: "product-management",
        path: "/product-management",
        file: resolve(__dirname, "./pages/index.vue"),
      });
    });
  },
});
