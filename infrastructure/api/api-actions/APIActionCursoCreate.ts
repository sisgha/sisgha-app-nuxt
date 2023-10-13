import { z } from "zod";
import { BaseAPIAction } from "./BaseAPIAction";
import { IdZod } from "./validation/id.zod";

export interface IAPIActionCursoCreateDto {
  nome: string;
  nomeAbreviado: string;
  modalidadeId: number;
}

export class APIActionCursoCreate extends BaseAPIAction<IAPIActionCursoCreateDto, number | null> {
  buildSchema() {
    return z.object({
      nome: z.string().trim().min(1, "O nome do curso deve ser informado.").max(300, "O nome pode conter até 300 caractéres."),

      nomeAbreviado: z
        .string()
        .trim()
        .min(1, "O nome abreviado do curso deve ser informado.")
        .max(100, "O nome abreviado pode conter até 100 caractéres."),

      modalidadeId: z.intersection(z.number().gt(0, { message: "O curso deve estar relacionado a uma modalidade." }), IdZod),
    });
  }

  async invoke(rawDto: IAPIActionCursoCreateDto) {
    try {
      const schema = this.buildSchema();
      const validationResult = await schema.safeParseAsync(rawDto);

      if (validationResult.success) {
        const dto = validationResult.data;

        const result = await this.appContextAPI.gql("CreateCurso", {
          dto: {
            nome: dto.nome,
            nomeAbreviado: dto.nomeAbreviado,
            modalidadeId: dto.modalidadeId,
          },
        });

        const curso = result.curso;

        if (curso) {
          return curso.id;
        }
      }
    } catch (error) {}

    return null;
  }
}
