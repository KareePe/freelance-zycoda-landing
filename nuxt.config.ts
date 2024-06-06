// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  css: ["~/assets/css/main.css", "~/assets/css/style.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#BF2C7B" },
        { name: "msapplication-navbutton-color", content: "#BF2C7B" },
        { name: "apple-mobile-web-app-status-bar-style", content: "#BF2C7B" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/images/logo/symbol/square.png",
        },
      ],
    },
  },
  modules: ["@nuxtjs/i18n", "@vueform/nuxt"],
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
  runtimeConfig: {
    public: {
      NUXT_API_USER_MAIL: process.env.NUXT_API_USER_MAIL,
      NUXT_API_USER_PASSWORD: process.env.NUXT_API_USER_PASSWORD,
      NUXT_API_MAIL: process.env.NUXT_API_MAIL,
    },
  },
  nitro: {
    prerender: {
      failOnError: false,
    },
  },
});
