// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  css: ["~/assets/css/main.css","~/assets/css/style.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    strategy: "no_prefix",
    locales: [
      {
        code: "en",
        iso: "en",
        name: "English",
        file: "locales/en.json",
      },
      {
        code: "th",
        iso: "th",
        name: "Thailand",
        file: "locales/th.json",
      },
    ],
    defaultLocale: "en",
  },
});
