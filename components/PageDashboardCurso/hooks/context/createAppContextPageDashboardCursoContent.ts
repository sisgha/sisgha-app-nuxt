import { useAPIACtionCursoFindById } from "../../../../composables";

export type IPageDashboardCursoContentContext = Awaited<ReturnType<typeof createAppContextPageDashboardCursoContent>>;

export const createAppContextPageDashboardCursoContent = async () => {
  const idCurso = inject<ComputedRef<number>>("id_curso");

  if (!idCurso) {
    throw new Error("id_curso was not provied");
  }

  const apiActionCursoFindById = await useAPIACtionCursoFindById(idCurso);

  return {
    idCurso,
    apiActionCursoFindById,
  };
};
