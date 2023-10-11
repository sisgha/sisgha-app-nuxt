import { IInternalSearchStateSortBy } from "./IInternalSearchStateSortBy";

export type IInternalSearchState = {
  page: number;
  search: string;
  sortBy: IInternalSearchStateSortBy[];
  itemsPerPage: number;
};
