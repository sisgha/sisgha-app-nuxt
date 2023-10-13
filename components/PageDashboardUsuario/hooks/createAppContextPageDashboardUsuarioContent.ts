import { useAPIActionHookUsuarioFindById } from "../../../infrastructure/api/api-actions-hooks/useAPIActionHookUsuarioFindById";

export type IPageDashboardUsuarioContentContext = Awaited<ReturnType<typeof createAppContextPageDashboardUsuarioContent>>;

export const createAppContextPageDashboardUsuarioContent = async () => {
  const idUsuarioRef = inject<ComputedRef<number>>("id_usuario", () => computed(() => -1), true);

  const apiUsuarioInfo = await useAPIActionHookUsuarioFindById(idUsuarioRef);

  return {
    apiUsuarioInfo,
  };
};
