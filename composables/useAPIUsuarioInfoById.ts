export const useAPIUsuarioInfoById = async (idRef: Ref<number> | number) => {
  const query = await useAsyncGql("FindUsuarioById", {
    id: idRef,
  });

  const error = computed(() => query.error.value ?? null);
  const result = computed(() => query.data.value?.usuario ?? null);

  const isError = computed(() => error.value !== null);

  const isErrorNotFound = computed(() => {
    const error_value = unref(error);

    if (error_value) {
      const isQueryFindUsuarioById = error_value.operationName === "FindUsuarioById";

      const isError404 =
        isQueryFindUsuarioById &&
        error_value.gqlErrors.some((error: any) => {
          if ("status" in error && "path" in error) {
            return error?.status === 404 && JSON.stringify(error.path) === '["usuario"]';
          }

          return false;
        });

      return isError404;
    }

    return false;
  });

  return {
    isErrorNotFound,
    isError,
    error,
    result,
  };
};
