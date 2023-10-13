import { GenericListInput } from "../../../.nuxt/gql/default";
import { IAppContextAPI } from "../../../composables/hooks/createAppContextAPI";
import { BaseAPIAction } from "./BaseAPIAction";

export interface BaseAPIActionListConstructor<Result, Dto extends GenericListInput = GenericListInput> {
  new (appContextAPI: IAppContextAPI): BaseAPIActionList<Result, Dto>;
}

export abstract class BaseAPIActionList<Result, Dto extends GenericListInput = GenericListInput> extends BaseAPIAction<
  Dto,
  Result
> {
  buildSchema() {
    return null;
  }
}
