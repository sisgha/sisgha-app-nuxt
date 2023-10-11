import { INTERNAL_SEARCH_STATE_LIMIT_DEFAULT } from "../infrastructure/internal-search-state";
import { IInternalSearchState } from "../infrastructure/internal-search-state/domain/IInternalSearchState";

export const useAppSearchState = () => {
  const searchState = reactive<IInternalSearchState>({
    page: 1,
    search: "",
    sortBy: [],
    itemsPerPage: INTERNAL_SEARCH_STATE_LIMIT_DEFAULT,
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
