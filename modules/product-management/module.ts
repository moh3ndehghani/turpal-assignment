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
        prefix: "ProductManagement",
        pattern: "**/*.vue",
      });
    });

    nuxt.hook("pages:extend", (pages) => {
      pages.push(
        {
          name: "product-management",
          path: "/product-management",
          file: resolver.resolve("./pages/index.vue"),
        },
        {
          name: "product-details",
          path: "/product-management/:productId",
          file: resolver.resolve("./pages/[productId].vue"),
        }
      );
    });

    addLayout(
      {
        src: resolver.resolve("./layouts/ProductManagementLayout.vue"),
        filename: "product-management-layout.vue",
      },
      "product-management"
    );
  },
});
