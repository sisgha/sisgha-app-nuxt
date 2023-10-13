import { ListCargoQuery } from "../../../.nuxt/gql/default";
import { BaseAPIAction } from "./BaseAPIAction";

type IRetrievedCargo = ListCargoQuery["list"]["items"][number];

const DEFAULT_LIMIT = 50;

export class APIActionCargoGetAllActive extends BaseAPIAction<void, IRetrievedCargo[]> {
  async invoke() {
    const retrievedCargos = [];

    let page = 0;
    let hasMore = false;

    const limit = DEFAULT_LIMIT;

    do {
      const offset = page * limit;

      const response = await this.appContextAPI.gql("ListCargo", {
        dto: {
          limit: limit,
          filter: "dateDeleted IS NULL",
          ...(offset > 0 ? { offset: offset } : {}),
        },
      });

      const result = response.list;

      retrievedCargos.push(...result.items);

      hasMore = retrievedCargos.length < result.total;

      page++;
    } while (hasMore);

    return retrievedCargos;
  }
}
