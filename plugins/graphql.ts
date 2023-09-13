export default defineNuxtPlugin(async (_nuxtApp) => {
  // access cookie for auth
  const { getSession } = useAuth();

  const session = await getSession();

  const accessToken = computed(() => session?.accessToken);

  watch(
    [accessToken],
    ([accessToken]) => {
      if (accessToken) {
        useGqlToken(accessToken);
      }
    },
    { immediate: true }
  );
});
