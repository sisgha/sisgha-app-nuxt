import { z } from "zod";
import { IAppContextAPI } from "../../../composables/hooks/contexts/appContextAPI/createAppContextAPI";
import { wait } from "../../utils";
import { BaseAPIAction } from "./BaseAPIAction";
import { IdZod } from "./validation/id.zod";

export interface BaseAPIActionDeleteByIdConstructor {
  new (appContextAPI: IAppContextAPI): BaseAPIActionDeleteById;
}

export interface IBaseAPIActionDeleteByIdDto {
  id: number;
}

export abstract class BaseAPIActionDeleteById extends BaseAPIAction<IBaseAPIActionDeleteByIdDto, boolean> {
  buildSchema() {
    return z.object({
      id: IdZod,
    });
  }

  async invoke(rawDto: IBaseAPIActionDeleteByIdDto) {
    const schema = this.buildSchema();
    const validationResult = await schema.safeParseAsync(rawDto);

    if (validationResult.success) {
      const dto = validationResult.data;

      const result = await this.deactivateResource(dto.id);

      if (result) {
        await wait(250);
      }

      return result;
    } else {
      throw new TypeError("Invalid IBaseAPIActionDeleteByIdDto");
    }
  }

  protected abstract deactivateResource(id: number): Promise<boolean>;
}
