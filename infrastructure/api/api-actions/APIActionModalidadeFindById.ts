import { z } from "zod";
import { FindModalidadeByIdQuery } from "../../../.nuxt/gql/default";
import { BaseAPIAction } from "./BaseAPIAction";
import { IdZod } from "./validation/id.zod";

export interface IAPIActionModalidadeFindByIdDto {
  id: number;
}

export class APIActionModalidadeFindById extends BaseAPIAction<
  IAPIActionModalidadeFindByIdDto,
  FindModalidadeByIdQuery["modalidade"] | null
> {
  buildSchema() {
    return z.object({
      id: IdZod,
    });
  }

  async invoke(rawDto: IAPIActionModalidadeFindByIdDto) {
    const schema = this.buildSchema();

    try {
      const validationResult = await schema.safeParseAsync(rawDto);

      if (validationResult.success) {
        const dto = validationResult.data;

        const result = await this.appContextAPI.gql("FindModalidadeById", {
          id: dto.id,
        });

        const modalidade = result.modalidade;

        return modalidade;
      }
    } catch (error) {}

    return null;
  }
}
