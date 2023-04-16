// https://nuxt.com/docs/api/configuration/nuxt-config

import { withHttps, withTrailingSlash } from "ufo";
import svgLoader from "vite-svg-loader";

const RUNTIME_VERCEL_URL_RAW = process.env.NUXT_ENV_VERCEL_URL ?? process.env.VERCEL_URL;
const RUNTIME_VERCEL_URL = RUNTIME_VERCEL_URL_RAW ? withHttps(RUNTIME_VERCEL_URL_RAW) : null;

const RUNTIME_URL_RAW = process.env.RUNTIME_URL ?? RUNTIME_VERCEL_URL;
const RUNTIME_URL = RUNTIME_URL_RAW && withTrailingSlash(RUNTIME_URL_RAW);

const AUTH_ORIGIN = RUNTIME_URL ?? process.env.AUTH_ORIGIN;

const GQL_HOST = process.env.GQL_HOST ?? "https://sisgha.jipalab.dev/endpoint/graphql";

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      runtime: RUNTIME_URL ?? undefined,
    },
  },

  modules: [
    //
    "nuxt-graphql-client",
    "@sidebase/nuxt-auth",
    "@nuxtjs/color-mode",
  ],

  vite: {
    plugins: [svgLoader({})],

    define: {
      "process.env.DEBUG": false,
    },
  },

  css: [
    // ...
    "@mdi/font/css/materialdesignicons.min.css",
    "vuetify/lib/styles/main.css",
  ],

  build: {
    transpile: ["vuetify"],
  },

  auth: {
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
