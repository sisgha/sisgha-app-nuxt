import { IAPIServiceInvokeContext } from "../interfaces/IAPIServiceInvokeContext";

export const getAllCargos = async (context: IAPIServiceInvokeContext) => {
  const cargos = [];

  let page = 0;
  const limit = 10;

  let hasMore = false;

  do {
    const offset = page * limit;

    const response = await context.gql("ListCargo", {
      dto: {
        limit,
        ...(offset > 0 ? { offset: offset } : {}),
        filter: "NOT dateDeleted EXISTS",
      },
    });

    cargos.push(...response.listCargo.items);

    hasMore = cargos.length < response.listCargo.total;

    page++;
  } while (hasMore);

  return cargos;
};
