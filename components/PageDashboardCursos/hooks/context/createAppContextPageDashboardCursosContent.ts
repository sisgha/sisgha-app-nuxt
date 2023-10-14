import { APIActionCursoList, useAPIActionSearch } from "../../../../infrastructure";

export type IPageDashboardCursosContentContext = Awaited<ReturnType<typeof createAppContextPageDashboardCursosContent>>;

export const createAppContextPageDashboardCursosContent = async () => {
  const apiActionSearchCursos = await useAPIActionSearch(APIActionCursoList, "cursos");

  const appContextPageDashboardCursosContent = {
    apiActionSearchCursos,
  };

  return appContextPageDashboardCursosContent;
};
