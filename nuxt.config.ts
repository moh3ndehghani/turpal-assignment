// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  extends: [
    // "./modules/shared",
    // "./modules/order-processing",
    "./modules/product-management",
    "./modules/user-profile",
  ],
});
