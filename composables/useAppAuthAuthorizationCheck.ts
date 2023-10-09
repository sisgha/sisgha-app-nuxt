import { CheckUsuarioAuthorizationsInputCheck, CheckUsuarioAuthorizationsQueryVariables } from "../.nuxt/gql/default";
import { useAppContextAuth } from "./useAppContextAuth";

export const useAppAuthAuthorizationCheck = async (
  checkRef: ComputedRef<Omit<CheckUsuarioAuthorizationsInputCheck, "usuarioId"> | null>
) => {
  const gql = useGql();

  const appAuthContext = await useAppContextAuth();
  await appAuthContext.waitForUsuario();

  const usuarioId = useAsyncData(async () => {
    const usuario = appAuthContext.usuario.value!;
    return usuario.id;
  });

  const dtoCheckRef = computed((): CheckUsuarioAuthorizationsQueryVariables["dto"]["checks"][number] | null => {
    const check_value = unref(checkRef);
    const usuario_id_value = unref(usuarioId.data);

    if (check_value && usuario_id_value) {
      return {
        usuarioId: usuario_id_value,
        ...check_value,
      };
    }

    return null;
  });

  const dtoRef = computed((): CheckUsuarioAuthorizationsQueryVariables["dto"] => {
    const dto_check_value = unref(dtoCheckRef);

    return {
      checks: [...(dto_check_value ? [dto_check_value] : [])],
    };
  });

  const query = useAsyncData(async () => {
    const dto = unref(dtoRef);

    console.log(dtoRef.value);

    const response = await gql("CheckUsuarioAuthorizations", { dto: dto });

    return response.checkUsuarioAuthorizations.checks;
  }, {});

  const result = computed(() => query.data.value?.[0] ?? null);

  const isLoading = computed(() => query.pending.value);

  return {
    query,
    result,
    isLoading,
  };
};
