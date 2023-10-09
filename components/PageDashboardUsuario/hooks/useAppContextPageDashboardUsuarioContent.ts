import { IPageDashboardUsuarioContentContext } from "./createAppContextPageDashboardUsuarioContent";

export const APP_CONTEXT_PAGE_DASHBOARD_USUARIO_CONTENT = Symbol();

export const useAppContextPageDashboardUsuarioContent = async () => {
  const appContextPageDashboardUsuarioContent = inject<IPageDashboardUsuarioContentContext>(
    APP_CONTEXT_PAGE_DASHBOARD_USUARIO_CONTENT
  )!;

  return appContextPageDashboardUsuarioContent;
};
