import { APP_CONTEXT_API } from "./hooks/APP_CONTEXT_API";
import { IAppContextAPI } from "./hooks/createAppContextAPI";

export const useAppContextAPI = () => {
  const appContextAPI = inject<IAppContextAPI>(APP_CONTEXT_API)!;
  return appContextAPI;
};
