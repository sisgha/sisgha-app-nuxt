import { api } from "../../infrastructure";
import { IAPIServiceInvokeAction } from "../../infrastructure/api/api-service/domain/IAPIServiceInvokeAction";

export type IAppContextAPI = Awaited<ReturnType<typeof createAppContextAPI>>;

export const createAppContextAPI = () => {
  const gql = useGql();

  const contextRef = computed((): api.IAPIServiceInvokeContext => ({ gql }));

  const invoke = async <InputDto, Result>(action: IAPIServiceInvokeAction<InputDto, Result>, inputDto: InputDto) => {
    const context = unref(contextRef);

    const result = await action(context, inputDto);

    return result;
  };

  return {
    invoke,
    contextRef,
  };
};
