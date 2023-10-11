import { useAPISearch } from "~/composables/useAPISearch";
import { listUsuario } from "../../../infrastructure/api";

export type IPageDashboardUsuariosContentContext = Awaited<ReturnType<typeof createAppContextPageDashboardUsuariosContent>>;

export const createAppContextPageDashboardUsuariosContent = async () => {
  const apiSearchUsuarios = await useAPISearch(listUsuario, true, "usuarios");

  return {
    apiSearchUsuarios,
  };
};
