// https://nuxt.com/docs/api/configuration/nuxt-config

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
        host: process.env.GQL_HOST ?? "https://sisgha.jipalab.dev/endpoint/graphql",

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
