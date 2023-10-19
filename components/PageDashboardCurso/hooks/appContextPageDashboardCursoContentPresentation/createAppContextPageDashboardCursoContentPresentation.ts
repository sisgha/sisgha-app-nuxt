import { useAppContextPageDashboardCurso } from "../appContextPageDashboardCurso/useAppContextPageDashboardCurso";

export type IPageDashboardCursoContentPresentationContext = Awaited<
  ReturnType<typeof createAppContextPageDashboardCursoContentPresentation>
>;

export const createAppContextPageDashboardCursoContentPresentation = async () => {
  const { idCurso } = useAppContextPageDashboardCurso();

  const apiActionCursoFindById = await useAPIACtionCursoFindById(idCurso);

  return {
    apiActionCursoFindById,
  };
};
