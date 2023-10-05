import { CheckUsuarioAuthorizationsInputCheck, GetAuthedUsuarioQuery } from "#gql";

type IGetAuthedUsuarioQueryUsuario = GetAuthedUsuarioQuery["usuario"];

type IGetUsuarioResult<Strict extends boolean> = Strict extends true
  ? IGetAuthedUsuarioQueryUsuario
  : IGetAuthedUsuarioQueryUsuario | null;

export const useAuthedUsuarioInfo = async () => {
  const GqlInstance = useGql();

  const authState = useAuthState();

  const authedUsuarioQuery = await useAsyncGql({
    operation: "GetAuthedUsuario",
    variables: {},
    options: {
      immediate: authState.status.value === "authenticated",
    },
  });

  const isBusy = computed(() => unref(authedUsuarioQuery.pending) || unref(authState.loading));

  const usuario = ref<null | IGetAuthedUsuarioQueryUsuario>(null);

  const handleAuthStatus = async () => {
    const status = unref(authState.status);

    switch (status) {
      case "authenticated": {
        const authed_user_data = unref(authedUsuarioQuery.data);
        const is_authed_user_query_pending = unref(authedUsuarioQuery.pending);

        if (!authed_user_data && !is_authed_user_query_pending) {
          await authedUsuarioQuery.execute();
        }

        break;
      }

      case "unauthenticated": {
        usuario.value = null;

        break;
      }
    }
  };

  const handleauthedUsuarioQuery = () => {
    const authed_user_data = unref(authedUsuarioQuery.data);

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
    [authedUsuarioQuery.pending, authedUsuarioQuery.data, authedUsuarioQuery.error, isBusy],
    handleauthedUsuarioQuery,
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

  const checkAuthorization = async (checkStatement: Omit<CheckUsuarioAuthorizationsInputCheck, "usuarioId">) => {
    const usuario = await waitForUsuario();

    const data = await GqlInstance("CheckUsuarioAuthorizations", {
      dto: {
        checks: [
          {
            usuarioId: usuario.id,
            ...checkStatement,
          },
        ],
      },
    });

    const checks = data.checkUsuarioAuthorizations.checks;

    const checkResult = checks[0];

    const can = checkResult.can;

    return can;
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
    new Promise<IGetAuthedUsuarioQueryUsuario>((resolve) => {
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
    authedUsuarioQuery,

    //

    checkCargo,
    checkAuthorization,

    //

    usuario,

    //

    getUsuario,
    getUsuarioRef,

    //

    waitForUsuario,
  };
};
