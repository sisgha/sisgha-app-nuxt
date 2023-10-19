import { APP_CONTEXT_PAGE_DASHBOARD_CURSO_CONTENT_PRESENTATION } from "./APP_CONTEXT_PAGE_DASHBOARD_CURSO_CONTENT_PRESENTATION";
import { IPageDashboardCursoContentPresentationContext } from "./createAppContextPageDashboardCursoContentPresentation";

export const useAppContextPageDashboardCursoContentPresentation = () => {
  const appContextPageDashboardCursoContentPresentation = inject<IPageDashboardCursoContentPresentationContext>(
    APP_CONTEXT_PAGE_DASHBOARD_CURSO_CONTENT_PRESENTATION
  );

  if (!appContextPageDashboardCursoContentPresentation) {
    throw new Error("APP_CONTEXT_PAGE_DASHBOARD_CURSO_CONTENT_PRESENTATION was not provied");
  }

  return appContextPageDashboardCursoContentPresentation;
};
