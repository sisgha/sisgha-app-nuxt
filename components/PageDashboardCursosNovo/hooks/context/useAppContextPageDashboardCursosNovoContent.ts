import { IPageDashboardCursosNovoContentContext } from "./createAppContextPageDashboardCursosNovoContent";
import { APP_CONTEXT_PAGE_DASHBOARD_CURSOS_NOVO_CONTENT } from "./tokens/APP_CONTEXT_PAGE_DASHBOARD_CURSOS_NOVO_CONTENT";

export const useAppContextPageDashboardCursosNovoContent = async () => {
  const appContextPageDashboardCursosNovoContent = inject<IPageDashboardCursosNovoContentContext>(
    APP_CONTEXT_PAGE_DASHBOARD_CURSOS_NOVO_CONTENT
  );

  if (!appContextPageDashboardCursosNovoContent) {
    throw new Error("useAppContextPageDashboardCursosNovoContent must be used within an context provider");
  }

  return appContextPageDashboardCursosNovoContent;
};
