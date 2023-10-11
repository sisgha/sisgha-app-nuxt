import { GenericListInput } from "../../../../../.nuxt/gql/default";
import { IAPIServiceInvokeContext } from "../../domain";

export interface IAPIListModalidadeDto extends GenericListInput {}

export const listModalidade = async (context: IAPIServiceInvokeContext, rawDto: IAPIListModalidadeDto) => {
  const dto = rawDto;

  const response = await context.gql("ListModalidade", {
    dto: {
      ...dto,
    },
  });

  return response.listModalidade;
};
