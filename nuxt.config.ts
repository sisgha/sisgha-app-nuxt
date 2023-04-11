// https://nuxt.com/docs/api/configuration/nuxt-config

const AUTH_ORIGIN = process.env.NUXT_ENV_VERCEL_URL ?? process.env.VERCEL_URL ?? process.env.AUTH_ORIGIN;

const GQL_HOST = process.env.GQL_HOST ?? "https://sisgha.jipalab.dev/endpoint/graphql";

export default defineNuxtConfig({
  modules: [
    //
    "nuxt-graphql-client",
    "@sidebase/nuxt-auth",
    "@nuxtjs/color-mode",
  ],

  css: [
    // ...
    "@mdi/font/css/materialdesignicons.min.css",
    "vuetify/lib/styles/main.css",
  ],

  build: {
    transpile: ["vuetify"],
  },

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },

  auth: {
    enableSessionRefreshPeriodically: 3 * 60 * 1000,
    // defaultProvider: "sso-jipalab",
    origin: AUTH_ORIGIN,
  },

  "graphql-client": {
    watch: true,
    autoImport: true,
    functionPrefix: "Gql",
    documentPaths: ["./graphql"],
    preferGETQueries: false,

    codegen: {
      silent: true,
      skipTypename: true,
      useTypeImports: true,
      dedupeFragments: true,
      onlyOperationTypes: true,
      disableOnBuild: false,
    },

    clients: {
      default: {
        host: GQL_HOST,

        retainToken: true,

        //     // Basic
        //     token: "<auth_token>",

        //     // Advanced
        //     token: {
        //       type: "Bearer",
        //       name: "Authorization",
        //       value: "<auth_token>",
        //     },
      },
    },
  },
});
