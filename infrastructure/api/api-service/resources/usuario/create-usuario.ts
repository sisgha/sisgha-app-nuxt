import { z } from "zod";
import { IAPIServiceInvokeContext } from "../../domain/IAPIServiceInvokeContext";
import { IdZod } from "../../validation/IdZod";
import { addCargoToUsuario } from "../usuario-cargo/add-cargo-to-usuario";
import { isEmailAvailable } from "./is-email-available";
import { isMatriculaSiapeAvailable } from "./is-matricula-siape-available";

export interface IAPICreateUsuarioDto {
  nome: string;

  email: string;
  matriculaSiape: string;

  cargoIds?: number[];
}

export const buildCreateUsuarioZodSchema = (context: IAPIServiceInvokeContext) => {
  return z.object({
    nome: z.string().trim().min(1, "O nome do usuário deve ser informado.").max(300, "O nome pode conter até 300 caractéres."),

    email: z
      .string()
      .email("O e-mail deve ser válido.")
      .refine(
        async (val) => {
          const isAvailable = await isEmailAvailable(context, { email: val });
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
          const isAvailable = await isMatriculaSiapeAvailable(context, { matriculaSiape: val });
          return isAvailable;
        },
        {
          message: "A Matrícula SIAPE informada está indisponível para uso.",
        }
      ),

    cargoIds: z.array(IdZod),
  });
};

export const createUsuario = async (context: IAPIServiceInvokeContext, rawDto: IAPICreateUsuarioDto) => {
  try {
    const createUsuarioSchema = buildCreateUsuarioZodSchema(context);

    const validationResult = await createUsuarioSchema.safeParseAsync(rawDto);

    if (validationResult.success) {
      const dto = validationResult.data;

      const result = await context.gql("CreateUsuario", {
        dto: {
          nome: dto.nome,
          email: dto.email,
          matriculaSiape: dto.matriculaSiape,
        },
      });

      const usuario = result.createUsuario;

      if (usuario) {
        for (const cargoId of dto.cargoIds) {
          const usuarioId = usuario.id;

          await addCargoToUsuario(context, { cargoId: cargoId, usuarioId: usuarioId });
        }

        return usuario.id;
      }
    }
  } catch (error) {}

  return null;
};
