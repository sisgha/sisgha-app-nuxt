import { GenericListInput } from "../../../.nuxt/gql/default";
import { IAPIServiceInvokeContext } from "../interfaces";

export interface IAPIListUsuarioDto extends GenericListInput {}

export const listUsuario = async (context: IAPIServiceInvokeContext, rawDto: IAPIListUsuarioDto) => {
  const dto = rawDto;

  const response = await context.gql("ListUsuario", {
    dto: {
      ...dto,
    },
  });

  return response.listUsuario;
};
