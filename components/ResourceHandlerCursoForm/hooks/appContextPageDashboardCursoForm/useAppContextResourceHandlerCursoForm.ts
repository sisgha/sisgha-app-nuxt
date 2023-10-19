import { APP_CONTEXT_RESOURCE_HANDLER_CURSO_FORM } from "./APP_CONTEXT_RESOURCE_HANDLER_CURSO_FORM";
import { IResourceHandlerCursoContext } from "./createAppContextResourceHandlerCursoForm";

export const useAppContextResourceHandlerCursoForm = () => {
  const appContextPageDashboardCursoForm = inject<IResourceHandlerCursoContext>(APP_CONTEXT_RESOURCE_HANDLER_CURSO_FORM);

  if (!appContextPageDashboardCursoForm) {
    throw new Error("APP_CONTEXT_RESOURCE_HANDLER_CURSO_FORM was not provied");
  }

  return appContextPageDashboardCursoForm;
};
