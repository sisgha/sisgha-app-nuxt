import { APIActionUsuarioFindById, useAPIActionFindById } from "../../../infrastructure";

export type IPageDashboardUsuarioContentContext = Awaited<ReturnType<typeof createAppContextPageDashboardUsuarioContent>>;

export const createAppContextPageDashboardUsuarioContent = async () => {
  const idUsuario = inject<ComputedRef<number>>("id_usuario");

  if (!idUsuario) {
    throw new Error("id_usuario was not provied");
  }

  const apiActionUsuarioFindById = await useAPIActionFindById(APIActionUsuarioFindById, idUsuario, "usuarios", "usuario::id");

  return {
    idUsuario,
    apiActionUsuarioFindById,
  };
};
