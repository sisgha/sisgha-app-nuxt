import { createVuetify } from "vuetify";
import * as coreComponents from "vuetify/components";
import * as directives from "vuetify/directives";
import { VDataTableServer } from "vuetify/labs/VDataTable";
import { pt } from "vuetify/locale";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,

    components: {
      ...coreComponents,
      VDataTableServer,
    },

    directives,

    locale: {
      locale: "pt",
      messages: { pt },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
