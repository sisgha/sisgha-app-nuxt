import { CheckUsuarioAuthorizationsInputCheck, CheckUsuarioAuthorizationsQueryVariables, GetAuthedUsuarioQuery } from "#gql";

type IAppAuthContextGetAuthedUsuarioQueryUsuario = GetAuthedUsuarioQuery["usuario"];

type IAppAuthContextGetUsuarioResult<Strict extends boolean> = Strict extends true
  ? IAppAuthContextGetAuthedUsuarioQueryUsuario
  : IAppAuthContextGetAuthedUsuarioQueryUsuario | null;

export type IAppContextAuth = Awaited<ReturnType<typeof createAppContextAuth>>;

export const createAppContextAuth = async () => {
  const gql = useGql();

  const authState = useAuthState();

  const queryUsuario = await useAsyncGql({
    operation: "GetAuthedUsuario",
    variables: {},
    options: {
      immediate: authState.status.value === "authenticated",
    },
  });

  const isBusy = computed(() => unref(queryUsuario.pending) || unref(authState.loading));

  const usuario = ref<null | IAppAuthContextGetAuthedUsuarioQueryUsuario>(null);

  const handleAuthStateStatus = async () => {
    const status = unref(authState.status);

    switch (status) {
      case "authenticated": {
        const query_usuario_data = unref(queryUsuario.data);
        const query_usuario_is_pending = unref(queryUsuario.pending);

        if (!query_usuario_data && !query_usuario_is_pending) {
          await queryUsuario.execute();
        }

        break;
      }

      case "unauthenticated": {
        usuario.value = null;
        break;
      }
    }
  };

  const handleQueryUsuario = () => {
    const is_busy_value = unref(isBusy);
    const query_usuario_data = unref(queryUsuario.data);

    if (!is_busy_value) {
      let usuarioValue = null;

      if (query_usuario_data) {
        usuarioValue = query_usuario_data.usuario;
      }

      usuario.value = usuarioValue;
    }
  };

  const waitForIdleState = () =>
    new Promise<void>((resolve) => {
      const handleTick = () => {
        const is_busy_value = unref(isBusy);

        if (!is_busy_value) {
          resolve();
          unwatch();
        }
      };

      const unwatch = watch([isBusy], handleTick, { immediate: false });

      handleTick();
    });

  watch(
    // ...
    [authState.status],
    handleAuthStateStatus,
    { immediate: true }
  );

  watch(
    // ...
    [queryUsuario.pending, queryUsuario.data, queryUsuario.error, isBusy],
    handleQueryUsuario,
    { immediate: true }
  );

  const checkCargo = async (cargoSlug: string) => {
    const usuario = await waitForUsuario();

    const data = await gql("CheckUsuarioHasCargoByUsuarioIdAndCargoSlug", {
      cargoSlug,
      usuarioId: usuario.id,
    });

    return data.resultado;
  };

  const getUsuario = <Strict extends boolean, Usuario extends IAppAuthContextGetUsuarioResult<Strict>>(strict: Strict) => {
    const usuario_value: unknown = unref(usuario);
    return <Usuario>usuario_value;
  };

  const getUsuarioRef = <Strict extends boolean, Usuario extends IAppAuthContextGetUsuarioResult<Strict>>(strict: Strict) => {
    const usuario_ref: unknown = <Ref<Usuario>>usuario;
    return usuario_ref;
  };

  const waitForUsuario = () =>
    new Promise<IAppAuthContextGetAuthedUsuarioQueryUsuario>(async (resolve) => {
      const handleTick = () => {
        const is_busy_value = unref(isBusy);
        const usuario_value = unref(usuario);

        if (!is_busy_value && usuario_value !== null) {
          resolve(usuario_value);
          unwatch();
        }
      };

      const unwatch = watch([isBusy, usuario], handleTick, { immediate: false });

      handleTick();
    });

  const checkAuthorization = async (authorizationCheckStatement: Omit<CheckUsuarioAuthorizationsInputCheck, "usuarioId">) => {
    const usuario = await waitForUsuario();

    const data = await gql("CheckUsuarioAuthorizations", {
      dto: {
        checks: [
          {
            usuarioId: usuario.id,
            ...authorizationCheckStatement,
          },
        ],
      },
    });

    const checks = data.checkUsuarioAuthorizations.checks;
    const checkResult = checks[0];
    const can = checkResult.can;

    return can;
  };

  const usuarioIdRef = computed(() => {
    const usuario_value = unref(usuario);
    return usuario_value?.id ?? null;
  });

  const useAuthorizationCheck = async (authorizationCheckStatement: Omit<CheckUsuarioAuthorizationsInputCheck, "usuarioId">) => {
    const dtoCheckRef = computed((): CheckUsuarioAuthorizationsInputCheck | null => {
      const usuario_id_value = unref(usuarioIdRef);

      if (usuario_id_value) {
        return {
          usuarioId: usuario_id_value,
          ...authorizationCheckStatement,
        };
      }

      return null;
    });

    const dtoRef = computed((): CheckUsuarioAuthorizationsQueryVariables["dto"] => {
      const dto_check_value = unref(dtoCheckRef);

      if (dto_check_value) {
        return {
          checks: [dto_check_value],
        };
      }

      return {
        checks: [],
      };
    });

    const authorizationCheck = await useAsyncGql("CheckUsuarioAuthorizations", {
      dto: dtoRef,
    });

    const results = computed(() => authorizationCheck.data.value?.checkUsuarioAuthorizations.checks ?? []);

    const result = computed(() => {
      const results_value = unref(results);

      if (results_value.length === 1) {
        return results_value[0];
      }

      return null;
    });

    const can = computed(() => {
      const result_value = unref(result);

      if (result_value) {
        return result_value.can;
      }

      return false;
    });

    const isBusy = computed(() => authorizationCheck.pending.value);

    return {
      can,
      result,
      isBusy,
    };
  };

  return {
    //
    isBusy,
    queryUsuario,

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
    waitForIdleState,

    //

    useAuthorizationCheck,
  };
};
