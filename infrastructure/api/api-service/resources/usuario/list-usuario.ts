import { ListUsuarioQuery } from "../../../../../.nuxt/gql/default";
import { IAPIServiceInvokeActionGenericList } from "../../domain/IAPIServiceInvokeActionGenericList";

export const listUsuario: IAPIServiceInvokeActionGenericList<ListUsuarioQuery["listUsuario"]> = async (context, inputDto) => {
  const dto = inputDto;
  const response = await context.gql("ListUsuario", { dto: { ...dto } });
  return response.listUsuario;
};
