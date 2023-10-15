import { APIActionCursoFindById, useAPIActionFindById } from "../../../../infrastructure";

export type IPageDashboardCursoContentContext = Awaited<ReturnType<typeof createAppContextPageDashboardCursoContent>>;

export const createAppContextPageDashboardCursoContent = async () => {
  const idCurso = inject<ComputedRef<number>>("id_curso");

  if (!idCurso) {
    throw new Error("id_curso was not provied");
  }

  const apiActionUsuarioFindById = await useAPIActionFindById(APIActionCursoFindById, idCurso, "cursos", "curso::id");

  return {
    idCurso,
    apiActionUsuarioFindById,
  };
};
