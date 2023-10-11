import { APP_CONTEXT_AUTH } from "./hooks/APP_CONTEXT_AUTH";
import { IAppContextAuth } from "./hooks/createAppContextAuth";

export const useAppContextAuth = async () => {
  const appContextAuth = inject<IAppContextAuth>(APP_CONTEXT_AUTH)!;
  return appContextAuth;
};
