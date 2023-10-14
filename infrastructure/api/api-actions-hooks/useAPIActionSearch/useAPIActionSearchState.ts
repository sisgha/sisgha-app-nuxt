import { IAPIActionSearchStateDateDeletedFilter } from "./domain";
import { IAPIActionSearchState } from "./domain/IAPIActionSearchState";
import { API_ACTION_SEARCH_STATE_LIMIT_DEFAULT } from "./tokens";

export const useAPIActionSearchState = () => {
  const searchState = reactive<IAPIActionSearchState>({
    page: 1,
    search: "",
    sortBy: [],
    itemsPerPage: API_ACTION_SEARCH_STATE_LIMIT_DEFAULT,
    filterDateDeleted: IAPIActionSearchStateDateDeletedFilter.ALL,
  });

  const { isDebouncePending, debouncedReactiveState: debouncedSearchState } = useDebouncedReactive(searchState, 75, {
    maxWait: 500,
  });

  return {
    searchState,
    //
    debouncedSearchState,
    //
    isDebouncePending,
  };
};
