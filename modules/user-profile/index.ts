import { resolve, join  , dirname} from "path";
import type { Nuxt } from "@nuxt/schema";
import { fileURLToPath } from 'url'
import { defineNuxtModule, addComponent , addLayout} from '@nuxt/kit'


export default defineNuxtModule({
  meta: {
    name: "user-profile-module",
    configKey: "user-profile",
  },

  setup(options: any, nuxt: Nuxt) {

    addLayout({
      src: resolve(__dirname, './layouts/default.vue'),
      filename: 'default.vue'
    }, 'profile-default')
    
    nuxt.hook("pages:extend", (pages) => {
      pages.push(
        {
          name: "user-profile",
          path: "/user-profile",
          file: resolve(__dirname, "./pages/index.vue"),
          meta:{ layout: "profile-default"}
        },
        {
          name: "user-profile-security",
          path: "/user-profile/security",
          file: resolve(__dirname, "./pages/security/index.vue"),
          meta:{ layout: "profile-default"}
        },
        {
          name: "user-profile-settings",
          path: "/user-profile/settings/:name",
          file: resolve(__dirname, "./pages/settings/[name].vue"),
          meta:{ layout: "profile-default"}
        }
      );
    });
  },
});
