import { APP_CONTEXT_PAGE_DASHBOARD_CURSOS_CONTENT } from "./tokens/APP_CONTEXT_PAGE_DASHBOARD_CURSOS_CONTENT";

export type IPageDashboardCursosContentContext = Awaited<ReturnType<typeof createAppContextPageDashboardCursosContent>>;

export const createAppContextPageDashboardCursosContent = async (shouldProvide = true) => {
  const appContextPageDashboardCursosContent = {};

  if (shouldProvide) {
    provide(APP_CONTEXT_PAGE_DASHBOARD_CURSOS_CONTENT, appContextPageDashboardCursosContent);
  }

  return appContextPageDashboardCursosContent;
};
