import { useAPISearch } from "~/composables/useAPISearch";
import { APIActionUsuarioList } from "../../../infrastructure/api/api-actions";

export type IPageDashboardUsuariosContentContext = Awaited<ReturnType<typeof createAppContextPageDashboardUsuariosContent>>;

export const createAppContextPageDashboardUsuariosContent = async () => {
  const apiSearchUsuarios = await useAPISearch(APIActionUsuarioList, true, "usuarios");

  return {
    apiSearchUsuarios,
  };
};
