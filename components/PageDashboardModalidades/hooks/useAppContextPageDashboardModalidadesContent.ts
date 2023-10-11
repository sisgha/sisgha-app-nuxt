import { IPageDashboardModalidadesContentContext } from "./createAppContextPageDashboardModalidadesContent";

export const APP_CONTEXT_PAGE_DASHBOARD_MODALIDADES_CONTENT = Symbol();

export const useAppContextPageDashboardModalidadesContent = async () => {
  const appContextPageDashboardModalidadesContent = inject<IPageDashboardModalidadesContentContext>(
    APP_CONTEXT_PAGE_DASHBOARD_MODALIDADES_CONTENT
  )!;

  return appContextPageDashboardModalidadesContent;
};
