import { z } from "zod";
import { CheckUsuarioAuthorizationsQuery } from "../../../.nuxt/gql/default";
import { BaseAPIAction } from "./BaseAPIAction";
import { IdZod } from "./validation/id.zod";

type IAuthorizationCheck = {
  usuarioId: number;
  recurso: string;
  verbo: string;
  entityId: number | null;
};

export type IAPIActionUsuarioCheckAuthorizationsDto = IAuthorizationCheck[];

export class APIActionUsuarioCheckAuthorizations extends BaseAPIAction<
  IAPIActionUsuarioCheckAuthorizationsDto,
  CheckUsuarioAuthorizationsQuery["checkUsuarioAuthorizations"]["checks"]
> {
  buildSchema() {
    return z.array(
      z.object({
        usuarioId: IdZod,
        recurso: z.string().trim(),
        verbo: z.string().trim(),
        entityId: IdZod.nullable(),
      })
    );
  }

  async invoke(rawDto: IAPIActionUsuarioCheckAuthorizationsDto) {
    const schema = this.buildSchema();

    const validationResult = await schema.safeParseAsync(rawDto);

    if (validationResult.success) {
      const dto = validationResult.data;

      const result = await this.appContextAPI.gql("CheckUsuarioAuthorizations", {
        dto: {
          checks: dto,
        },
      });

      return result.checkUsuarioAuthorizations.checks;
    } else {
      throw new TypeError("Invalid input data");
    }
  }
}
