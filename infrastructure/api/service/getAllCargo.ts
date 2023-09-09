import { IAPIServiceInvokeContext } from "../interfaces/IAPIServiceInvokeContext";

const LIMIT = 50;

export const getAllCargos = async (context: IAPIServiceInvokeContext) => {
  const cargos = [];

  let page = 0;
  let hasMore = false;

  do {
    const offset = page * LIMIT;

    const response = await context.gql("ListCargo", {
      dto: {
        limit: LIMIT,
        ...(offset > 0 ? { offset: offset } : {}),
        filter: "dateDeleted != NULL",
      },
    });

    cargos.push(...response.listCargo.items);

    hasMore = cargos.length < response.listCargo.total;

    page++;
  } while (hasMore);

  return cargos;
};
