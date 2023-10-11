import { useQuery } from "@tanstack/vue-query";
import { IAPIServiceInvokeActionGenericList } from "../infrastructure/api";
import { getGenericListInputFromInternalSearchState } from "../infrastructure/internal-search-state";

export const useAPISearch = async <Result>(
  actionList: IAPIServiceInvokeActionGenericList<Result>,
  shouldSuspense = true,
  searchKeyPrefix = actionList.name
) => {
  const appContextAPI = useAppContextAPI();

  const { searchState, debouncedSearchState, isDebouncePending } = useAppSearchState();

  const dtoRef = computed(() => getGenericListInputFromInternalSearchState(debouncedSearchState));
  const searchKey = computed(() => `${searchKeyPrefix}::dto::${JSON.stringify(dtoRef.value)}`);

  const searchQuery = useQuery(
    [searchKeyPrefix, searchKey],
    async () => {
      const dto = dtoRef.value;
      return appContextAPI.invoke(actionList, dto);
    },
    {
      keepPreviousData: true,
    }
  );

  if (shouldSuspense) {
    onServerPrefetch(async () => {
      await searchQuery.suspense();
    });
  }

  const data = computed(() => searchQuery.data.value);

  const items = computed(() => data.value?.items ?? []);
  const total = computed(() => data.value?.total ?? 0);

  const isLoading = computed(() => searchQuery.isLoading.value || isDebouncePending.value);

  watch([data], ([data]) => {
    if (data) {
      searchState.itemsPerPage = data.limit;
    }
  });

  return {
    searchState,
    //
    isLoading,
    //
    data,
    items,
    total,
  };
};
