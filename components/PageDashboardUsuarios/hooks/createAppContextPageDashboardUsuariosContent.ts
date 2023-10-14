import { useAPIActionSearch } from "../../../infrastructure";
import { APIActionUsuarioList } from "../../../infrastructure/api/api-actions";

export type IPageDashboardUsuariosContentContext = Awaited<ReturnType<typeof createAppContextPageDashboardUsuariosContent>>;

export const createAppContextPageDashboardUsuariosContent = async () => {
  const apiSearchUsuarios = await useAPIActionSearch(APIActionUsuarioList, "usuarios");

  return {
    apiSearchUsuarios,
  };
};
