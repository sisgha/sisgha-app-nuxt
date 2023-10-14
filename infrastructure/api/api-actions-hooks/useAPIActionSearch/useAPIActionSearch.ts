import { useQuery } from "@tanstack/vue-query";
import { BaseAPIActionListConstructor } from "../../api-actions/BaseAPIActionList";
import { useAPIActionSearchState } from "./useAPIActionSearchState";
import { buildGenericListInputFromAPIActionSearchState } from "./utils";

export const useAPIActionSearch = async <Result extends { items: any[] }>(
  apiActionList: BaseAPIActionListConstructor<Result>,
  shouldSuspense = true,
  searchKeyPrefix = apiActionList.name
) => {
  const appContextAPI = useAppContextAPI();

  const { searchState, debouncedSearchState, isDebouncePending } = useAPIActionSearchState();

  const dtoRef = computed(() => buildGenericListInputFromAPIActionSearchState(debouncedSearchState));
  const searchKey = computed(() => `${searchKeyPrefix}::dto::${JSON.stringify(dtoRef.value)}`);

  const searchQuery = useQuery(
    [searchKeyPrefix, searchKey],
    async () => {
      const dto = dtoRef.value;
      return appContextAPI.invoke(apiActionList, dto);
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
  const items = computed((): Result["items"] => data.value?.items ?? []);
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
