import { z } from "zod";
import { wait } from "../../utils";
import { APIActionCursoCreate } from "./APIActionCursoCreate";
import { APIActionCursoFindById } from "./APIActionCursoFindById";
import { BaseAPIAction } from "./BaseAPIAction";

export interface IAPIActionCursoUpdateDto {
  id: number;

  nome?: string;
  nomeAbreviado?: string;
  modalidadeId?: number;
}

export class APIActionCursoUpdate extends BaseAPIAction<IAPIActionCursoUpdateDto, number | null> {
  buildSchema() {
    const createCursoSchema = this.appContextAPI.buildSchema(APIActionCursoCreate);
    const findCursoByIdSchema = this.appContextAPI.buildSchema(APIActionCursoFindById);

    return z
      .object({})
      .merge(findCursoByIdSchema)
      .merge(
        createCursoSchema
          .pick({
            nome: true,
            nomeAbreviado: true,
            modalidadeId: true,
          })
          .partial()
      );
  }

  async invoke(rawDto: IAPIActionCursoUpdateDto) {
    try {
      const schema = this.buildSchema();
      const validationResult = await schema.safeParseAsync(rawDto);

      if (validationResult.success) {
        const dto = <IAPIActionCursoUpdateDto>validationResult.data;

        const result = await this.appContextAPI.gql("CursoUpdate", {
          dto: dto,
        });

        const curso = result.curso;

        if (curso) {
          await wait(250);
          return curso.id;
        }
      }
    } catch (error) {}

    return null;
  }
}
