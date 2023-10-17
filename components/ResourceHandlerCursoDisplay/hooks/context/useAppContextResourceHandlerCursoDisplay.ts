import { IResourceHandlerCursoDisplayContext } from "./createAppContextResourceHandlerCursoDisplay";
import { APP_CONTEXT_RESOURCE_HANDLER_CURSO_DISPLAY } from "./tokens/APP_CONTEXT_RESOURCE_HANDLER_CURSO_DISPLAY";

export const useAppContextResourceHandlerCursoDisplay = () => {
  const appContextPageDashboardCursoDisplay = inject<IResourceHandlerCursoDisplayContext>(
    APP_CONTEXT_RESOURCE_HANDLER_CURSO_DISPLAY
  );

  if (!appContextPageDashboardCursoDisplay) {
    throw new Error("APP_CONTEXT_RESOURCE_HANDLER_CURSO_DISPLAY was not provied");
  }

  return appContextPageDashboardCursoDisplay;
};
