export const useAuthedUserInfo = async () => {
  const getAuthedUserQuery = await useAsyncGql({
    operation: "GetAuthedUser",
    variables: {},
  });

  const { data, pending } = getAuthedUserQuery;

  const isLoading = computed(() => unref(pending));

  const usuario = computed(() => unref(data)?.usuario!);

  const verifyUsuarioHasCargo = (cargoSlug: string) => unref(usuario)?.cargos.some((cargo) => cargo.slug === cargoSlug);

  return {
    //

    isLoading,
    getAuthedUserQuery,

    //

    verifyUsuarioHasCargo,
    usuario,
  };
};
