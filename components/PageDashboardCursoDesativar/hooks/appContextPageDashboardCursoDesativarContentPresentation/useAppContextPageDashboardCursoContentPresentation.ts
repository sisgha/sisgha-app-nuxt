import { APP_CONTEXT_PAGE_DASHBOARD_CURSO_DESATIVAR_CONTENT_PRESENTATION } from "./APP_CONTEXT_PAGE_DASHBOARD_CURSO_DESATIVAR_CONTENT_PRESENTATION";
import { IPageDashboardCursoDesativarContentPresentationContext } from "./createAppContextPageDashboardCursoDesativarContentPresentation";

export const useAppContextPageDashboardCursoDesativarContentPresentation = () => {
  const appContextPageDashboardCursoDesativarContentPresentation = inject<IPageDashboardCursoDesativarContentPresentationContext>(
    APP_CONTEXT_PAGE_DASHBOARD_CURSO_DESATIVAR_CONTENT_PRESENTATION
  );

  if (!appContextPageDashboardCursoDesativarContentPresentation) {
    throw new Error("APP_CONTEXT_PAGE_DASHBOARD_CURSO_DESATIVAR_CONTENT_PRESENTATION was not provied");
  }

  return appContextPageDashboardCursoDesativarContentPresentation;
};
