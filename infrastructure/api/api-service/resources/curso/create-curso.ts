import { z } from "zod";
import { IAPIServiceInvokeContext } from "../../domain/IAPIServiceInvokeContext";
import { IdZod } from "../../validation/IdZod";

export interface IAPICreateCursoDto {
  nome: string;
  nomeAbreviado: string;
  modalidadeId: number;
}

export const buildCreateCursoZodSchema = (contextRef: Ref<IAPIServiceInvokeContext>) => {
  return z.object({
    nome: z.string().trim().min(1, "O nome do curso deve ser informado.").max(300, "O nome pode conter até 300 caractéres."),

    nomeAbreviado: z
      .string()
      .trim()
      .min(1, "O nome abreviado do curso deve ser informado.")
      .max(100, "O nome abreviado pode conter até 100 caractéres."),

    modalidadeId: z.intersection(z.number().gt(0, { message: "O curso deve estar relacionado a uma modalidade." }), IdZod),
  });
};

export const createCurso = async (contextRef: Ref<IAPIServiceInvokeContext>, rawDto: IAPICreateCursoDto) => {
  try {
    const context = contextRef.value;

    const createCursoZodSchema = buildCreateCursoZodSchema(contextRef);

    const validationResult = await createCursoZodSchema.safeParseAsync(rawDto);

    if (validationResult.success) {
      const dto = validationResult.data;

      const result = await context.gql("CreateCurso", {
        dto: {
          nome: dto.nome,
          nomeAbreviado: dto.nomeAbreviado,
          modalidadeId: dto.modalidadeId,
        },
      });

      const curso = result.createCurso;

      if (curso) {
        return curso.id;
      }
    }
  } catch (error) {}

  return null;
};
