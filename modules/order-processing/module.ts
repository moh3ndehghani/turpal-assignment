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
        prefix: "OrderProcessing",
        pattern: "**/*.vue",
      });
    });

    nuxt.hook("pages:extend", (pages) => {
      pages.push(
        {
          name: "order-processing",
          path: "/order-processing",
          file: resolver.resolve("./pages/index.vue"),
        },
        {
          name: "order-details",
          path: "/order-processing/:orderId",
          file: resolver.resolve("./pages/[orderId].vue"),
        }
      );
    });

    addLayout(
      {
        src: resolver.resolve("./layouts/OrderProcessingLayout.vue"),
        filename: "order-processing-layout.vue",
      },
      "order-processing"
    );
  },
});
