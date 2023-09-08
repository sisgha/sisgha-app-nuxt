import { z } from "zod";
import { IdZod } from "../IdZod";
import { IAPIServiceInvokeContext } from "../interfaces/IAPIServiceInvokeContext";

export interface IAPIAddCargoToUsuarioDto {
  cargoId: number;
  usuarioId: number;
}

export const buildAddCargoToUsuarioZodSchema = (context: IAPIServiceInvokeContext) => {
  return z.object({
    cargoId: IdZod,
    usuarioId: IdZod,
  });
};

export const addCargoToUsuario = async (context: IAPIServiceInvokeContext, rawDto: IAPIAddCargoToUsuarioDto) => {
  try {
    const addCargoToUsuarioSchema = buildAddCargoToUsuarioZodSchema(context);

    const validationResult = await addCargoToUsuarioSchema.safeParseAsync(rawDto);

    if (validationResult.success) {
      const dto = validationResult.data;

      const result = await context.gql("AddCargoToUsuario", {
        dto: {
          cargoId: dto.cargoId,
          usuarioId: dto.usuarioId,
        },
      });

      const usuario_cargo = result.addCargoToUsuario;

      if (usuario_cargo) {
        return true;
      }
    }
  } catch (error) {}

  return false;
};
