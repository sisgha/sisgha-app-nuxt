import { IResourceHandlerCursoContext } from "./createAppContextResourceHandlerCurso";
import { APP_CONTEXT_RESOURCE_HANDLER_CURSO } from "./tokens/APP_CONTEXT_RESOURCE_HANDLER_CURSO";

export const useAppContextResourceHandlerCurso = () => {
  const appContextPageDashboardCursoContent = inject<IResourceHandlerCursoContext>(APP_CONTEXT_RESOURCE_HANDLER_CURSO);

  if (!appContextPageDashboardCursoContent) {
    throw new Error("APP_CONTEXT_PAGE_DASHBOARD_CURSO_CONTENT was not provied");
  }

  return appContextPageDashboardCursoContent;
};
