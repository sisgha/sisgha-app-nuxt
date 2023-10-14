import { useQuery } from "@tanstack/vue-query";
import { APP_QUERY_SUSPENSE_BEHAVIOUR, handleQuerySuspenseBehaviour } from "../../utils";
import { APIActionUsuarioCheckCargo, IAPIActionUsuarioCheckCargoDto } from "../api-actions/APIActionUsuarioCheckCargo";

export const useAPIActionHookUsuarioCheckCargo = async (
  dtoRef: MaybeRef<IAPIActionUsuarioCheckCargoDto>,
  suspenseBehaviour = APP_QUERY_SUSPENSE_BEHAVIOUR.ALWAYS
) => {
  const appContextAPI = useAppContextAPI();

  const queryKeyDto = computed(() => `usuario_cargo::check::dto::${JSON.stringify(unref(dtoRef))}`);

  const query = useQuery(["usuario_cargo::check", queryKeyDto], async () => {
    const dto = unref(dtoRef);
    return appContextAPI.invoke(APIActionUsuarioCheckCargo, dto);
  });

  await handleQuerySuspenseBehaviour(suspenseBehaviour, query);

  const result = computed(() => query.data?.value);
  const isLoading = computed(() => query.isLoading?.value);

  return {
    result,

    //

    query,

    //

    isLoading,
  };
};
