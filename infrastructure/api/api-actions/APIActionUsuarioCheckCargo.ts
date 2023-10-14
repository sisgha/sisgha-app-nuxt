import { z } from "zod";
import { BaseAPIAction } from "./BaseAPIAction";
import { IdZod } from "./validation/id.zod";

export interface IAPIActionUsuarioCheckCargoDto {
  usuarioId: number;
  cargoSlug: string;
}

export class APIActionUsuarioCheckCargo extends BaseAPIAction<IAPIActionUsuarioCheckCargoDto, boolean> {
  buildSchema() {
    return z.object({
      usuarioId: IdZod,
      cargoSlug: z.string().trim(),
    });
  }

  async invoke(rawDto: IAPIActionUsuarioCheckCargoDto) {
    const schema = this.buildSchema();

    const validationResult = await schema.safeParseAsync(rawDto);

    if (validationResult.success) {
      const dto = validationResult.data;

      const response = await this.appContextAPI.gql("CheckUsuarioHasCargoByUsuarioIdAndCargoSlug", {
        usuarioId: dto.usuarioId,
        cargoSlug: dto.cargoSlug,
      });

      return response.resultado;
    } else {
      throw new TypeError("Invalid input data");
    }
  }
}
