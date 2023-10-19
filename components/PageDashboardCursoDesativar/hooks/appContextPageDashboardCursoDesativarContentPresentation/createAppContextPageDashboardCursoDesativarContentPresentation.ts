import { useAppContextPageDashboardCurso } from "../../../PageDashboardCurso/hooks";

export type IPageDashboardCursoDesativarContentPresentationContext = Awaited<
  ReturnType<typeof createAppContextPageDashboardCursoDesativarContentPresentation>
>;

export const createAppContextPageDashboardCursoDesativarContentPresentation = async () => {
  const { idCurso } = useAppContextPageDashboardCurso();

  const apiActionCursoFindById = await useAPIACtionCursoFindById(idCurso);

  return {
    apiActionCursoFindById,
  };
};
