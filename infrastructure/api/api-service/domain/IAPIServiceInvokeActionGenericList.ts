import { GenericListInput } from "../../../../.nuxt/gql/default";
import { IAPIServiceInvokeAction } from "./IAPIServiceInvokeAction";

export type IAPIServiceInvokeActionGenericList<Result, Dto extends GenericListInput = GenericListInput> = IAPIServiceInvokeAction<
  Dto,
  Result
>;
