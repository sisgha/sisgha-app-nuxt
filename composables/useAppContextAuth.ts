import { IAppContextAuth } from "./createAppContextAuth";

export const useAppContextAuth = async () => {
  const appAuthContext = inject<IAppContextAuth>(APP_CONTEXT_AUTH)!;
  return appAuthContext;
};
