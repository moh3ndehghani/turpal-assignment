import {
  defineNuxtModule,
  addPlugin,
  createResolver,
  addLayout,
} from "@nuxt/kit";

export default defineNuxtModule({
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    nuxt.hook("components:dirs", (dirs) => {
      dirs.push({
        path: resolver.resolve("./components"),
        prefix: "UserProfile",
        pattern: "**/*.vue",
      });
    });

    nuxt.hook("pages:extend", (pages) => {
      pages.push(
        {
          name: "user-profile",
          path: "/user-profile",
          file: resolver.resolve("./pages/index.vue"),
        },
        {
          name: "user-profile-settings",
          path: "/user-profile/settings",
          file: resolver.resolve("./pages/settings.vue"),
        }
      );
    });

    addLayout(
      {
        src: resolver.resolve("./layouts/UserProfileLayout.vue"),
        filename: "user-profile-layout.vue",
      },
      "user-profile"
    );
  },
});
