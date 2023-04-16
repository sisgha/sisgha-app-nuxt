import { defineNuxtRouteMiddleware } from "nuxt/app";
import { $URL, isEqual } from "ufo";

export default defineNuxtRouteMiddleware((to: any, from: any) => {
  const runtimeConfig = useRuntimeConfig();
  const runtime = runtimeConfig.public.runtime;

  if (runtime) {
    let requestHost: string | undefined = undefined;

    if (process.server) {
      // const nuxtApp = useNuxtApp();
      // const req = nuxtApp.ssrContext?.event.node.req;
      // const headers = req?.headers;

      const headers = useRequestHeaders();
      requestHost = headers.host;
    } else {
      requestHost = window.location.host;
    }

    const { host: runtimeHost } = new $URL(runtime);

    if (requestHost) {
      if (!isEqual(requestHost, runtimeHost)) {
        return navigateTo(runtime, { external: true });
      }
    }
  }
});
