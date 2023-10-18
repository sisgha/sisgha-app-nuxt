import { callWithNuxt } from "nuxt/app";

export default defineNuxtPlugin(async (_nuxtApp) => {
  const app = useNuxtApp();
  const { data } = useAuthState();

  const accessToken = computed(() => data.value?.accessToken ?? null);

  watch(
    [accessToken],
    ([token]) => {
      if (token) {
        callWithNuxt(app, () => {
          useGqlToken(token);
        });
      }
    },
    { immediate: true }
  );
});
