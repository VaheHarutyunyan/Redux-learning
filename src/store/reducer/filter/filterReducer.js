import { FILTER_SORT } from "../../constants/filter-constants";

export const filterReducer = (state = "all", action) => {
  switch (action.type) {
    case FILTER_SORT:
      return action.sort;

    default:
      return state;
  }
};
