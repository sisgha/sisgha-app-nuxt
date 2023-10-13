import { z } from "zod";
import { APIActionUsuarioAddCargo } from "./APIActionUsuarioAddCargo";
import { APIActionUsuarioCheckIsEmailAvailable } from "./APIActionUsuarioCheckIsEmailAvailable";
import { APIActionUsuarioCheckIsMatriculaSiapeAvailable } from "./APIActionUsuarioCheckIsMatriculaSiapeAvailable";
import { BaseAPIAction } from "./BaseAPIAction";
import { IdZod } from "./validation/id.zod";

export interface IAPIActionUsuarioCreateDto {
  nome: string;

  email: string;
  matriculaSiape: string;

  cargoIds?: number[];
}

export class APIActionUsuarioCreate extends BaseAPIAction<IAPIActionUsuarioCreateDto, number | null> {
  buildSchema() {
    return z.object({
      nome: z.string().trim().min(1, "O nome do usuário deve ser informado.").max(300, "O nome pode conter até 300 caractéres."),

      email: z
        .string()
        .email("O e-mail deve ser válido.")
        .refine(
          async (val) => {
            const isAvailable = await this.appContextAPI.invoke(APIActionUsuarioCheckIsEmailAvailable, {
              email: val,
            });

            return isAvailable;
          },
          {
            message: "O e-mail informado está indisponível para uso.",
          }
        ),

      matriculaSiape: z
        .string()
        .min(1, "A matrícula SIAPE do usuário deve ser informada.")
        .refine(
          async (val) => {
            const isAvailable = await this.appContextAPI.invoke(APIActionUsuarioCheckIsMatriculaSiapeAvailable, {
              matriculaSiape: val,
            });

            return isAvailable;
          },
          {
            message: "A Matrícula SIAPE informada está indisponível para uso.",
          }
        ),

      cargoIds: z.array(IdZod),
    });
  }

  async invoke(rawDto: IAPIActionUsuarioCreateDto) {
    try {
      const schema = this.buildSchema();
      const validationResult = await schema.safeParseAsync(rawDto);

      if (validationResult.success) {
        const dto = validationResult.data;

        const result = await this.appContextAPI.gql("CreateUsuario", {
          dto: {
            nome: dto.nome,
            email: dto.email,
            matriculaSiape: dto.matriculaSiape,
          },
        });

        const usuario = result.usuario;

        if (usuario) {
          for (const cargoId of dto.cargoIds) {
            const usuarioId = usuario.id;

            await this.appContextAPI.invoke(APIActionUsuarioAddCargo, { cargoId: cargoId, usuarioId: usuarioId });
          }

          return usuario.id;
        }
      }
    } catch (error) {}

    return null;
  }
}
