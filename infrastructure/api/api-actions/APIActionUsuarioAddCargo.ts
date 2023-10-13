import { z } from "zod";
import { BaseAPIAction } from "./BaseAPIAction";
import { IdZod } from "./validation/id.zod";

export interface IAPIActionUsuarioAddCargoDto {
  cargoId: number;
  usuarioId: number;
}

export class APIActionUsuarioAddCargo extends BaseAPIAction<IAPIActionUsuarioAddCargoDto, boolean> {
  buildSchema() {
    return z.object({
      cargoId: IdZod,
      usuarioId: IdZod,
    });
  }

  async invoke(rawDto: IAPIActionUsuarioAddCargoDto) {
    try {
      const schema = this.buildSchema();

      const validationResult = await schema.safeParseAsync(rawDto);

      if (validationResult.success) {
        const dto = validationResult.data;

        const result = await this.appContextAPI.gql("AddCargoToUsuario", {
          dto: {
            cargoId: dto.cargoId,
            usuarioId: dto.usuarioId,
          },
        });

        const usuarioCargo = result.usuarioCargo;

        if (usuarioCargo) {
          return true;
        }
      }
    } catch (error) {}

    return false;
  }
}
