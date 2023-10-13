import { IPageDashboardCursosContentContext } from "./createAppContextPageDashboardCursosContent";
import { APP_CONTEXT_PAGE_DASHBOARD_CURSOS_CONTENT } from "./tokens/APP_CONTEXT_PAGE_DASHBOARD_CURSOS_CONTENT";

export const useAppContextPageDashboardCursosContent = async () => {
  const appContextPageDashboardCursosContent = inject<IPageDashboardCursosContentContext>(
    APP_CONTEXT_PAGE_DASHBOARD_CURSOS_CONTENT
  );

  if (!appContextPageDashboardCursosContent) {
    throw new Error("useAppContextPageDashboardCursosContent must be used within an context provider");
  }

  return appContextPageDashboardCursosContent;
};
