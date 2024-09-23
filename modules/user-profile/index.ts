import { defineNuxtModule } from "@nuxt/kit";
import { resolve, join } from "path";
import type { Nuxt } from "@nuxt/schema";
import fs from "fs";
import path from "path";
export default defineNuxtModule({
  meta: {
    name: "user-profile-module",
    configKey: "user-profile",
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

    nuxt.hook("pages:extend", (pages) => {
      pages.push(
        {
          name: "user-profile",
          path: "/user-profile",
          file: resolve(__dirname, "./pages/index.vue"),
        },
        {
          name: "user-profile-security",
          path: "/user-profile/security",
          file: resolve(__dirname, "./pages/security/index.vue"),
        },
        {
          name: "user-profile-settings",
          path: "/user-profile/settings/:name",
          file: resolve(__dirname, "./pages/settings/[name].vue"),
        }
      );
    });
  },
});
