import { IAPIServiceInvokeContext } from "./IAPIServiceInvokeContext";

export type IAPIServiceInvokeAction<InputDto, Result> = (
  context: IAPIServiceInvokeContext,
  inputDto: InputDto
) => Promise<Result>;
