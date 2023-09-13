import { GetAuthedUserQuery } from "#gql";

type IGetAuthedUserQueryUsuario = GetAuthedUserQuery["usuario"];

type IGetUsuarioResult<Strict extends boolean> = Strict extends true
  ? IGetAuthedUserQueryUsuario
  : IGetAuthedUserQueryUsuario | null;

export const useAuthedUsuarioInfo = async () => {
  const GqlInstance = useGql();

  const authState = useAuthState();

  const authedUserQuery = await useAsyncGql({
    operation: "GetAuthedUser",
    variables: {},
    options: {
      immediate: authState.status.value === "authenticated",
    },
  });

  const isBusy = computed(() => unref(authedUserQuery.pending) || unref(authState.loading));

  const usuario = ref<null | IGetAuthedUserQueryUsuario>(null);

  const handleAuthStatus = async () => {
    const status = unref(authState.status);

    switch (status) {
      case "authenticated": {
        const authed_user_data = unref(authedUserQuery.data);
        const is_authed_user_query_pending = unref(authedUserQuery.pending);

        if (!authed_user_data && !is_authed_user_query_pending) {
          await authedUserQuery.execute();
        }

        break;
      }

      case "unauthenticated": {
        usuario.value = null;

        break;
      }
    }
  };

  const handleAuthedUserQuery = () => {
    const authed_user_data = unref(authedUserQuery.data);

    if (!isBusy.value) {
      let usuarioValue = null;

      if (authed_user_data) {
        usuarioValue = authed_user_data.usuario;
      }

      usuario.value = usuarioValue;
    }
  };

  watch(
    // ...
    [authState.status],
    handleAuthStatus,
    { immediate: true }
  );

  watch(
    // ...
    [authedUserQuery.pending, authedUserQuery.data, authedUserQuery.error, isBusy],
    handleAuthedUserQuery,
    { immediate: true }
  );

  const checkCargo = async (cargoSlug: string) => {
    const usuario = await waitForUsuario();

    const data = await GqlInstance("CheckUsuarioHasCargoByUsuarioIdAndCargoSlug", {
      cargoSlug,
      usuarioId: usuario.id,
    });

    return data.resultado;
  };

  const getUsuarioRef = <Strict extends boolean, Usuario extends IGetUsuarioResult<Strict>>(strict: Strict) => {
    const usuario_ref: unknown = <Ref<Usuario>>usuario;
    return usuario_ref;
  };

  const getUsuario = <Strict extends boolean, Usuario extends IGetUsuarioResult<Strict>>(strict: Strict) => {
    const usuario_value: unknown = unref(usuario);
    return <Usuario>usuario_value;
  };

  const waitForUsuario = () =>
    new Promise<IGetAuthedUserQueryUsuario>((resolve) => {
      const handleTick = () => {
        const isBusy_value = unref(isBusy);
        const usuario_value = unref(usuario);

        if (!isBusy_value && usuario_value !== null) {
          resolve(usuario_value);
          unwatch();
        }
      };

      const unwatch = watch([isBusy, usuario], handleTick, { immediate: false });

      handleTick();
    });

  return {
    //
    isBusy,
    authedUserQuery,

    //

    checkCargo,

    //

    usuario,

    //

    getUsuario,
    getUsuarioRef,

    //

    waitForUsuario,
  };
};
