import { z } from "zod";
import { BaseAPIAction } from "./BaseAPIAction";

export interface IAPIActionUsuarioCheckIsEmailAvailableDto {
  email: string;
  usuarioId?: number | null;
}

export class APIActionUsuarioCheckIsEmailAvailable extends BaseAPIAction<IAPIActionUsuarioCheckIsEmailAvailableDto, boolean> {
  buildSchema() {
    return z.object({
      email: z.string().email(),
      usuarioId: z.number().int().positive().nullable().default(null),
    });
  }

  async invoke(rawDto: IAPIActionUsuarioCheckIsEmailAvailableDto) {
    const schema = this.buildSchema();

    const validationResult = await schema.safeParseAsync(rawDto);

    if (validationResult.success) {
      const dto = validationResult.data;

      const response = await this.appContextAPI.gql("CheckUsuarioEmailAvailability", {
        email: dto.email,
        usuarioId: dto.usuarioId,
      });

      return response.result;
    }

    return false;
  }
}
