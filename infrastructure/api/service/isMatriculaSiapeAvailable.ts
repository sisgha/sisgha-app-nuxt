import { z } from "zod";
import { IAPIServiceInvokeContext } from "../interfaces";

export type IAPIIsMatriculaSiapeAvailableDto = {
  matriculaSiape: string;
  usuarioId?: number | null;
};

export const buildIsMatriculaSiapeAvailableZodSchema = (context: IAPIServiceInvokeContext) => {
  return z.object({
    matriculaSiape: z.string().min(1, "A matrícula SIAPE do usuário deve ser informada."),
    usuarioId: z.number().int().positive().nullable().default(null),
  });
};

export const isMatriculaSiapeAvailable = async (context: IAPIServiceInvokeContext, rawDto: IAPIIsMatriculaSiapeAvailableDto) => {
  const isMatriculaSiapeAvailableSchema = buildIsMatriculaSiapeAvailableZodSchema(context);

  const validationResult = await isMatriculaSiapeAvailableSchema.safeParseAsync(rawDto);

  if (validationResult.success) {
    const dto = validationResult.data;

    const response = await context.gql("CheckUsuarioMatriculaSiapeAvailability", {
      matriculaSiape: dto.matriculaSiape,
      usuarioId: dto.usuarioId,
    });

    return response.result;
  }

  return false;
};
