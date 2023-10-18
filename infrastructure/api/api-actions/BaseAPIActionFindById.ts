import { z } from "zod";
import { IAppContextAPI } from "../../../composables/hooks/contexts/appContextAPI/createAppContextAPI";
import { BaseAPIAction } from "./BaseAPIAction";
import { IdZod } from "./validation/id.zod";

export interface BaseAPIActionFindByIdConstructor<Result> {
  new (appContextAPI: IAppContextAPI): BaseAPIActionFindById<Result>;
}

export interface IBaseAPIActionFindByIdDto {
  id: number;
}

export abstract class BaseAPIActionFindById<Result> extends BaseAPIAction<IBaseAPIActionFindByIdDto, Result> {
  buildSchema() {
    return z.object({
      id: IdZod,
    });
  }

  async invoke(rawDto: IBaseAPIActionFindByIdDto) {
    const schema = this.buildSchema();
    const validationResult = await schema.safeParseAsync(rawDto);

    if (validationResult.success) {
      const dto = validationResult.data;
      const resource = await this.retrieveResource(dto.id);
      return resource;
    } else {
      throw new TypeError("Invalid IBaseAPIActionFindByIdDto");
    }
  }

  protected abstract retrieveResource(id: number): Promise<Result>;
}
