import { APP_CONTEXT_PAGE_DASHBOARD_CURSO } from "./APP_CONTEXT_PAGE_DASHBOARD_CURSO";
import { IPageDashboardCursoContext } from "./createAppContextPageDashboardCurso";

export const useAppContextPageDashboardCurso = () => {
  const appContextPageDashboardCurso = inject<IPageDashboardCursoContext>(APP_CONTEXT_PAGE_DASHBOARD_CURSO);

  if (!appContextPageDashboardCurso) {
    throw new Error("APP_CONTEXT_PAGE_DASHBOARD_CURSO was not provied");
  }

  return appContextPageDashboardCurso;
};
