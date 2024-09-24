// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "~/modules/user-profile/module",
    "~/modules/order-processing/module",
    "~/modules/product-management/module",
  ],
});
