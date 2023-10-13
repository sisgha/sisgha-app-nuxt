import { ListModalidadeQuery } from "../../../../../.nuxt/gql/default";
import { IAPIServiceInvokeActionGenericList } from "../../domain";

export const listModalidade: IAPIServiceInvokeActionGenericList<ListModalidadeQuery["list"]> = async (context, rawDto) => {
  const dto = rawDto;

  const response = await context.gql("ListModalidade", {
    dto: {
      ...dto,
    },
  });

  return response.list;
};
