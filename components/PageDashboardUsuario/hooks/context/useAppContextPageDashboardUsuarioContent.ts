import { IPageDashboardUsuarioContentContext } from "./createAppContextPageDashboardUsuarioContent";
import { APP_CONTEXT_PAGE_DASHBOARD_USUARIO_CONTENT } from "./tokens/APP_CONTEXT_PAGE_DASHBOARD_USUARIO_CONTENT";

export const useAppContextPageDashboardUsuarioContent = async () => {
  const appContextPageDashboardUsuarioContent = inject<IPageDashboardUsuarioContentContext>(
    APP_CONTEXT_PAGE_DASHBOARD_USUARIO_CONTENT
  );

  if (!appContextPageDashboardUsuarioContent) {
    throw new Error("APP_CONTEXT_PAGE_DASHBOARD_USUARIO_CONTENT was not provied");
  }

  return appContextPageDashboardUsuarioContent;
};
