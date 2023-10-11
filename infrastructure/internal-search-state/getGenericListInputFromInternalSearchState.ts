import { GenericListInput } from "../../.nuxt/gql/default";
import { ISlideMode, getOffsetFromSlide } from "../api/api-service/search-slide";
import { minmax } from "../app-utils/minmax";
import { INTERNAL_SEARCH_STATE_LIMIT_MAX } from "./tokens/INTERNAL_SEARCH_STATE_LIMIT_MAX";
import { INTERNAL_SEARCH_STATE_LIMIT_MIN } from "./tokens/INTERNAL_SEARCH_STATE_LIMIT_MIN";
import { IInternalSearchState } from "./domain/IInternalSearchState";

export const getGenericListInputFromInternalSearchState = (searchState: IInternalSearchState) => {
  const dto: GenericListInput = {};

  //
  dto.query = searchState.search;

  //
  const isLimitMax = searchState.itemsPerPage === -1;

  if (isLimitMax) {
    dto.limit = INTERNAL_SEARCH_STATE_LIMIT_MAX;
  } else {
    dto.limit = minmax(INTERNAL_SEARCH_STATE_LIMIT_MIN, INTERNAL_SEARCH_STATE_LIMIT_MAX, searchState.itemsPerPage);
  }

  //
  dto.sort = searchState.sortBy.map(({ key, order }) => `${key}:${order}`);

  if (dto.sort.length === 0) {
    delete dto.sort;
  }

  //
  const offset = getOffsetFromSlide(ISlideMode.PAGE_INDEX_1, searchState.page, dto.limit);

  dto.offset = offset;

  //
  if (dto.offset <= 0) {
    delete dto.offset;
  }

  //
  return dto;
};
