import { IAPIServiceInvokeContext } from "../../domain/IAPIServiceInvokeContext";

const DEFAULT_LIMIT = 50;

export const getAllCargosActives = async (context: IAPIServiceInvokeContext, limit = DEFAULT_LIMIT) => {
  const retrievedCargos = [];

  let page = 0;
  let hasMore = false;

  do {
    const offset = page * limit;

    const response = await context.gql("ListCargo", {
      dto: {
        limit: limit,
        filter: "dateDeleted != NULL",
        ...(offset > 0 ? { offset: offset } : {}),
      },
    });

    retrievedCargos.push(...response.listCargo.items);

    hasMore = retrievedCargos.length < response.listCargo.total;

    page++;
  } while (hasMore);

  return retrievedCargos;
};
