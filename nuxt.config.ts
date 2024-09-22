// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  extends: [
    "./modules/shared",
    "./modules/order-processing",
    "./modules/product-management",
    "./modules/user-profile",
  ],
  router: {
    routes: [
      {
        path: "/user-profile",
        component: "./modules/user-profile/pages/index.vue",
      },
      {
        path: "/order-processing",
        component: "./modules/order-processing/pages/index.vue",
      },
      {
        path: "/product-management",
        component: "./modules/product-management/pages/index.vue",
      },
    ],
  },
});
