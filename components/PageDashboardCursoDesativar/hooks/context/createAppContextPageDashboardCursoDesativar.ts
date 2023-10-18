export type IPageDashboardCursoDesativarContext = Awaited<ReturnType<typeof createAppContextPageDashboardCursoDesativar>>;

export const createAppContextPageDashboardCursoDesativar = async () => {
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
