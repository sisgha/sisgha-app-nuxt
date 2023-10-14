import { useQuery } from "@tanstack/vue-query";
import { APP_QUERY_SUSPENSE_BEHAVIOUR, handleQuerySuspenseBehaviour } from "../../utils";
import {
  APIActionUsuarioCheckAuthorization,
  IAPIActionUsuarioCheckAuthorizationDto,
} from "../api-actions/APIActionUsuarioCheckAuthorization";

export const useAPIActionHookUsuarioCheckAuthorization = async (
  dtoRef: MaybeRef<IAPIActionUsuarioCheckAuthorizationDto>,
  suspenseBehaviour = APP_QUERY_SUSPENSE_BEHAVIOUR.ALWAYS
) => {
  const appContextAPI = useAppContextAPI();

  const query = useQuery(
    [
      // ...
      "usuarios",
      "usuario::authorization::check",
      computed(() => `usuario::by-id::${unref(dtoRef).usuarioId}`),
      computed(() => `usuario::authorization::check::dto::${JSON.stringify(unref(dtoRef))}`),
    ],
    async () => {
      const dto = unref(dtoRef);
      return appContextAPI.invoke(APIActionUsuarioCheckAuthorization, dto);
    },
    {
      keepPreviousData: true,
    }
  );

  await handleQuerySuspenseBehaviour(suspenseBehaviour, query);

  const can = computed(() => query.data?.value);
  const isLoading = computed(() => query.isLoading?.value);

  return {
    can,
    //
    query,
    //
    isLoading,
  };
};
