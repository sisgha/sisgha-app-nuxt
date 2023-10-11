import { ListCargoQuery } from "../../../../../.nuxt/gql/default";
import { IAPIServiceInvokeAction } from "../../domain";
import { IAPIServiceInvokeContext } from "../../domain/IAPIServiceInvokeContext";

const DEFAULT_LIMIT = 50;

type IRetrievedCargo = ListCargoQuery["listCargo"]["items"][number];

export const getAllCargosActives: IAPIServiceInvokeAction<void, IRetrievedCargo[]> = async (
  context: IAPIServiceInvokeContext
) => {
  const retrievedCargos = [];

  let page = 0;
  let hasMore = false;

  const limit = DEFAULT_LIMIT;

  do {
    const offset = page * limit;

    const response = await context.gql("ListCargo", {
      dto: {
        limit: limit,
        filter: "dateDeleted IS NULL",
        ...(offset > 0 ? { offset: offset } : {}),
      },
    });

    const result = response.listCargo;

    retrievedCargos.push(...result.items);

    hasMore = retrievedCargos.length < result.total;

    page++;
  } while (hasMore);

  return retrievedCargos;
};
