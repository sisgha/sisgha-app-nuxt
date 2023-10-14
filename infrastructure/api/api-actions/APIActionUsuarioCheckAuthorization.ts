import { z } from "zod";
import { BaseAPIAction } from "./BaseAPIAction";
import { IdZod } from "./validation/id.zod";

export type IAuthorizationCheck = {
  usuarioId: number;
  recurso: string;
  verbo: string;
  entityId?: number | null;
};

export interface IAPIActionUsuarioCheckAuthorizationDto extends IAuthorizationCheck {}

export class APIActionUsuarioCheckAuthorization extends BaseAPIAction<IAPIActionUsuarioCheckAuthorizationDto, boolean> {
  buildSchema() {
    return z.object({
      usuarioId: IdZod,
      recurso: z.string().trim(),
      verbo: z.string().trim(),
      entityId: IdZod.nullable().default(null),
    });
  }

  async invoke(rawDto: IAPIActionUsuarioCheckAuthorizationDto) {
    const schema = this.buildSchema();

    const validationResult = await schema.safeParseAsync(rawDto);

    if (validationResult.success) {
      const dto = validationResult.data;

      const result = await this.appContextAPI.gql("CheckUsuarioAuthorizations", {
        dto: {
          checks: [dto],
        },
      });

      return result.checkUsuarioAuthorizations.checks[0].can;
    } else {
      throw new TypeError("Invalid input data");
    }
  }
}
