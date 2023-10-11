import { IPageDashboardUsuariosContentContext } from "./createAppContextPageDashboardUsuariosContent";

export const APP_CONTEXT_PAGE_DASHBOARD_USUARIOS_CONTENT = Symbol();

export const useAppContextPageDashboardUsuariosContent = async () => {
  const appContextPageDashboardUsuariosContent = inject<IPageDashboardUsuariosContentContext>(
    APP_CONTEXT_PAGE_DASHBOARD_USUARIOS_CONTENT
  )!;

  return appContextPageDashboardUsuariosContent;
};
