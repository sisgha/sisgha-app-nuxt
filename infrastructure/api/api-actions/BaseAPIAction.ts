import { IAppContextAPI } from "../../../composables/hooks/contexts/appContextAPI/createAppContextAPI";

export interface BaseAPIActionConstructor<Dto, Result> {
  new (appContextAPI: IAppContextAPI): BaseAPIAction<Dto, Result>;
}

export abstract class BaseAPIAction<Dto, Result> {
  constructor(
    // ...
    protected readonly appContextAPI: IAppContextAPI
  ) {}

  buildSchema(): any {
    return null;
  }

  abstract invoke(dto: Dto): Promise<Result>;
}
