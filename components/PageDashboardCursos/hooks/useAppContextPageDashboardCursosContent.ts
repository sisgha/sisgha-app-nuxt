import { IPageDashboardCursosContentContext } from "./createAppContextPageDashboardModalidadesContent";

export const APP_CONTEXT_PAGE_DASHBOARD_CURSOS_CONTENT = Symbol();

export const useAppContextPageDashboardCursosContent = async () => {
  const appContextPageDashboardCursosContent = inject<IPageDashboardCursosContentContext>(
    APP_CONTEXT_PAGE_DASHBOARD_CURSOS_CONTENT
  )!;

  return appContextPageDashboardCursosContent;
};
