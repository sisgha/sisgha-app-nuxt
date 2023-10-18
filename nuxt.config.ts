// https://nuxt.com/docs/api/configuration/nuxt-config

import vuetify from "vite-plugin-vuetify";
import svgLoader from "vite-svg-loader";
import { EnvironmentConfigService } from "./server/infrastructure/config/environment-config";

//

const environmentConfigService = new EnvironmentConfigService();

const RUNTIME_URL = environmentConfigService.getRuntimeURL();
const AUTH_ORIGIN = RUNTIME_URL ?? process.env.AUTH_ORIGIN;
const GQL_HOST = process.env.GQL_HOST!;

//

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
    "@vueuse/nuxt",
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        config.plugins ||= [];
        config.plugins.push(vuetify());
      });
    },
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

  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "dark", // fallback value if not system preference found
    classSuffix: "",
    classPrefix: "app-color-mode-",
  },

  auth: {
    // defaultProvider: "sisgha-sso",
    origin: AUTH_ORIGIN,
    enableSessionRefreshPeriodically: 50 * 1000,
    enableSessionRefreshOnWindowFocus: true,
  },

  "graphql-client": {
    watch: true,
    autoImport: true,
    functionPrefix: "Gql",
    documentPaths: ["./infrastructure/api/graphql"],
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
