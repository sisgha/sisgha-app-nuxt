export default defineNuxtPlugin(async (_nuxtApp) => {
  const { data } = useAuthState();
  const accessToken = computed(() => data.value?.accessToken ?? null);

  watch(
    [accessToken],
    ([token]) => {
      if (token) {
        useGqlToken(token);
      }
    },
    { immediate: true }
  );
});
