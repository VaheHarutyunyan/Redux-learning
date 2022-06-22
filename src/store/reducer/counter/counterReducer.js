import {
  INCREMENT,
  DECREMENT,
  RESET,
} from "../../constants/counter-constants/index";

export const counterReducer = (count = 10000, action) => {
  switch (action.type) {
    case INCREMENT:
      return count + 1;
    case DECREMENT:
      return count - 1;
    case RESET:
      return 0;
    default: {
      return count;
    }
  }
};
