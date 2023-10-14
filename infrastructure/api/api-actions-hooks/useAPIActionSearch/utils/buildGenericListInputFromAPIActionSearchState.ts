import { GenericListInput } from "../../../../../.nuxt/gql/default";
import { minmax } from "../../../../utils";
import { IAPIActionSearchState, IAPIActionSearchStateDateDeletedFilter } from "../domain";
import { API_ACTION_SEARCH_STATE_LIMIT_MAX, API_ACTION_SEARCH_STATE_LIMIT_MIN } from "../tokens";
import { ISlideMode } from "./ISlideMode";
import { getOffsetFromSlide } from "./getOffsetFromSlide";

export const buildGenericListInputFromAPIActionSearchState = (searchState: IAPIActionSearchState) => {
  const dto: GenericListInput = {};

  //

  dto.query = searchState.search;

  //

  const isLimitMax = searchState.itemsPerPage === -1;

  if (isLimitMax) {
    dto.limit = API_ACTION_SEARCH_STATE_LIMIT_MAX;
  } else {
    dto.limit = minmax(API_ACTION_SEARCH_STATE_LIMIT_MIN, API_ACTION_SEARCH_STATE_LIMIT_MAX, searchState.itemsPerPage);
  }

  //

  dto.sort = searchState.sortBy.filter((i) => typeof i.order === "string").map(({ key, order }) => `${key}:${order}`);

  if (dto.sort.length === 0) {
    delete dto.sort;
  }

  //
  const offset = getOffsetFromSlide(ISlideMode.PAGE_INDEX_1, searchState.page, dto.limit);

  dto.offset = offset;

  if (dto.offset <= 0) {
    delete dto.offset;
  }

  //

  switch (searchState.filterDateDeleted) {
    case IAPIActionSearchStateDateDeletedFilter.ONLY_DELETED: {
      dto.filter = "dateDeleted IS NOT NULL";
      break;
    }

    case IAPIActionSearchStateDateDeletedFilter.ONLY_NOT_DELETED: {
      dto.filter = "dateDeleted IS NULL";
      break;
    }

    case IAPIActionSearchStateDateDeletedFilter.ALL:
    default: {
      break;
    }
  }

  //

  return dto;
};
