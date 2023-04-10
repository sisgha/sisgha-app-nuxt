// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    //
  ],

  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
