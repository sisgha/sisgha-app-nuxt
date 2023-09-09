import { api } from "../infrastructure";

type ISortByPayload = {
  key: string;
  order: string;
};

type IAPIListUsuarioPayload = {
  limit: number;
  offset: number;
  query: string;
  sortBy: ISortByPayload[];
};

type IPerformSearchDto = {
  limit: number;
  query: string;
  slide: { mode: "pageIndex0" | "pageIndex1" | "offset"; value: number };
  sortBy: ISortByPayload[];
};

export const useAPIListUsuario = () => {
  const payload = reactive<IAPIListUsuarioPayload>({
    limit: 10,
    offset: 0,
    query: "",
    sortBy: [],
  });

  const gql = useGql();

  const context: api.IAPIServiceInvokeContext = { gql };

  const makeListUsuarioAPICall = async (payload: IAPIListUsuarioPayload) => {
    const { query, limit, offset, sortBy } = payload;

    const response = await api.listUsuario(context, {
      query: query,
      limit: limit === -1 ? 100 : Math.max(10, Math.min(limit, 100)),
      ...(offset > 0 ? { offset: offset } : {}),
      sort: sortBy.map(({ key, order }) => `${key}:${order}`),
    });

    return response;
  };

  const listUsuarioQuery = useAsyncData(() => makeListUsuarioAPICall(payload));

  const isLoading = computed(() => listUsuarioQuery.pending.value);
  const total = computed(() => listUsuarioQuery.data.value?.total ?? 0);
  const items = computed(() => listUsuarioQuery.data.value?.items ?? []);

  const performSearch = async (performSearchDto: IPerformSearchDto) => {
    const { limit, query, sortBy } = performSearchDto;

    payload.limit = limit;
    payload.query = query;
    payload.sortBy = sortBy;

    const offset = (() => {
      switch (performSearchDto.slide.mode) {
        case "offset": {
          return performSearchDto.slide.value;
        }

        case "pageIndex0": {
          return performSearchDto.slide.value * limit;
        }

        case "pageIndex1": {
          return (performSearchDto.slide.value - 1) * limit;
        }
      }
    })();

    payload.offset = offset;

    return listUsuarioQuery.execute();
  };

  return {
    isLoading,

    listUsuarioQuery,

    //

    total,
    items,

    //

    performSearch,
  };
};
