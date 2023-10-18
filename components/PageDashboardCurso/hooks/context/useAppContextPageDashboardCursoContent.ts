import { IPageDashboardCursoContentContext } from "./createAppContextPageDashboardCursoContent";
import { APP_CONTEXT_PAGE_DASHBOARD_CURSO_CONTENT } from "./tokens/APP_CONTEXT_PAGE_DASHBOARD_CURSO_CONTENT";

export const useAppContextPageDashboardCursoContent = () => {
  const appContextPageDashboardCursoContent = inject<IPageDashboardCursoContentContext>(APP_CONTEXT_PAGE_DASHBOARD_CURSO_CONTENT);

  if (!appContextPageDashboardCursoContent) {
    throw new Error("APP_CONTEXT_PAGE_DASHBOARD_CURSO_CONTENT was not provied");
  }

  return appContextPageDashboardCursoContent;
};
