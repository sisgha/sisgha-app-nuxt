import { IPageDashboardCursoDesativarContext } from "./createAppContextPageDashboardCursoDesativar";
import { APP_CONTEXT_PAGE_DASHBOARD_CURSO_DESATIVAR } from "./tokens/APP_CONTEXT_PAGE_DASHBOARD_CURSO_DESATIVAR";

export const useAppContextPageDashboardCursoDesativar = () => {
  const appContextPageDashboardCursoDesativar = inject<IPageDashboardCursoDesativarContext>(
    APP_CONTEXT_PAGE_DASHBOARD_CURSO_DESATIVAR
  );

  if (!appContextPageDashboardCursoDesativar) {
    throw new Error("APP_CONTEXT_PAGE_DASHBOARD_CURSO_DESATIVAR was not provied");
  }

  return appContextPageDashboardCursoDesativar;
};
