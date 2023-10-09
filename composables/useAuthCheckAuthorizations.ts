import { CheckUsuarioAuthorizationsInputCheck, CheckUsuarioAuthorizationsQuery } from "../.nuxt/gql/default";

export const useAuthCheckAuthorizations = async (checks: CheckUsuarioAuthorizationsInputCheck[], shouldWaitForResult = false) => {
  const checkUsuarioAuthorizationsQuery = await useAsyncGql({
    operation: "CheckUsuarioAuthorizations",
    variables: {
      dto: { checks },
    },
  });

  const result = computed(() => checkUsuarioAuthorizationsQuery.data.value?.checkUsuarioAuthorizations.checks ?? null);

  const isBusy = computed(() => checkUsuarioAuthorizationsQuery.pending);

  const waitForResult = () =>
    new Promise<CheckUsuarioAuthorizationsQuery["checkUsuarioAuthorizations"]["checks"]>((resolve) => {
      const handleTick = () => {
        const isBusy_value = unref(isBusy);
        const result_value = unref(result);

        if (!isBusy_value && result_value !== null) {
          resolve(result_value); 
          unwatch();
        }
      };

      const unwatch = watch([isBusy, result], handleTick, { immediate: false });

      handleTick();
    });

  if (shouldWaitForResult) {
    await waitForResult();
  }

  return {
    result,
    waitForResult,
    checkUsuarioAuthorizationsQuery,
  };
};
