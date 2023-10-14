import { APP_CONTEXT_AUTH } from "./hooks/APP_CONTEXT_AUTH";
import { IAppContextAuth } from "./hooks/createAppContextAuth";

export const useAppContextAuth = () => {
  const appContextAuth = inject<IAppContextAuth>(APP_CONTEXT_AUTH);

  if (!appContextAuth) {
    throw new Error("APP_CONTEXT_AUTH not provied");
  }

  return appContextAuth;
};
