import { APP_CONTEXT_PAGE_DASHBOARD_CURSO_EDITAR_CONTENT_PRESENTATION } from "./APP_CONTEXT_PAGE_DASHBOARD_CURSO_EDITAR_CONTENT_PRESENTATION";
import { IPageDashboardCursoEditarContentPresentationContext } from "./createAppContextPageDashboardCursoEditarContentPresentation";

export const useAppContextPageDashboardCursoEditarContentPresentation = () => {
  const appContextPageDashboardCursoEditarContentPresentation = inject<IPageDashboardCursoEditarContentPresentationContext>(
    APP_CONTEXT_PAGE_DASHBOARD_CURSO_EDITAR_CONTENT_PRESENTATION
  );

  if (!appContextPageDashboardCursoEditarContentPresentation) {
    throw new Error("APP_CONTEXT_PAGE_DASHBOARD_CURSO_EDITAR_CONTENT_PRESENTATION was not provied");
  }

  return appContextPageDashboardCursoEditarContentPresentation;
};
