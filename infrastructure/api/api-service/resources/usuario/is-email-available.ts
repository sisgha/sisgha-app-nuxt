import { z } from "zod";
import { IAPIServiceInvokeContext } from "../../domain";

export type IAPIIsEmailAvailableDto = {
  email: string;
  usuarioId?: number | null;
};

export const buildIsEmailAvailableZodSchema = (context: IAPIServiceInvokeContext) => {
  return z.object({
    email: z.string().email(),
    usuarioId: z.number().int().positive().nullable().default(null),
  });
};

export const isEmailAvailable = async (context: IAPIServiceInvokeContext, rawDto: IAPIIsEmailAvailableDto) => {
  const isEmailAvailableSchema = buildIsEmailAvailableZodSchema(context);

  const validationResult = await isEmailAvailableSchema.safeParseAsync(rawDto);

  if (validationResult.success) {
    const dto = validationResult.data;

    const response = await context.gql("CheckUsuarioEmailAvailability", { email: dto.email, usuarioId: dto.usuarioId });

    return response.result;
  }

  return false;
};
