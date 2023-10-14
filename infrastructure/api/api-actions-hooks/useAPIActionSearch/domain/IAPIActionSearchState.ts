import { IAPIActionSearchStateDateDeletedFilter } from "./IAPIActionSearchStateDateDeletedFilter";
import { IAPIActionSearchStateSortBy } from "./IAPIActionSearchStateSortBy";

export type IAPIActionSearchState = {
  page: number;
  search: string;
  sortBy: IAPIActionSearchStateSortBy[];
  itemsPerPage: number;

  filterDateDeleted: IAPIActionSearchStateDateDeletedFilter;
};
