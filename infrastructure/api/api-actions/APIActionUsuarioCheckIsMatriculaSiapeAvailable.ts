import { z } from "zod";
import { BaseAPIAction } from "./BaseAPIAction";

export interface IAPIActionUsuarioCheckIsMatriculaSiapeAvailableDto {
  matriculaSiape: string;
  usuarioId?: number | null;
}

export class APIActionUsuarioCheckIsMatriculaSiapeAvailable extends BaseAPIAction<
  IAPIActionUsuarioCheckIsMatriculaSiapeAvailableDto,
  boolean
> {
  buildSchema() {
    return z.object({
      matriculaSiape: z.string().trim().min(1, "A matrícula SIAPE do usuário deve ser informada."),
      usuarioId: z.number().int().positive().nullable().default(null),
    });
  }

  async invoke(rawDto: IAPIActionUsuarioCheckIsMatriculaSiapeAvailableDto) {
    const schema = this.buildSchema();

    const validationResult = await schema.safeParseAsync(rawDto);

    if (validationResult.success) {
      const dto = validationResult.data;

      const response = await this.appContextAPI.gql("CheckUsuarioMatriculaSiapeAvailability", {
        matriculaSiape: dto.matriculaSiape,
        usuarioId: dto.usuarioId,
      });

      return response.result;
    }

    return false;
  }
}
