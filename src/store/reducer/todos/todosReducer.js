import initialState from "./initialState";
import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETED_TODO,
  CLEAR_COMPLETED_TODO,
  FILTERED_TODO,
} from "../../constants/todos-constants/index";

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: Date.now(),
            title: action.payload.title,
            completed: false,
          },
        ],
      };
    case DELETE_TODO:
      return {
        list: state.list.filter((item) => item.id !== action.payload.id),
      };

    case COMPLETED_TODO:
      return {
        list: state.list.map((item) =>
          item.id === action.payload.id
            ? { ...item, completed: !item.completed }
            : item
        ),
      };
    case CLEAR_COMPLETED_TODO:
      return {
        list: state.list.filter((item) => !item.completed),
      };
    case FILTERED_TODO:
      const filteredTodos = initialState.list.filter((item) =>
        item.title.includes(action.payload.filterValue)
      );
      return {
        filter: action.payload.filterValue,
        list: filteredTodos,
      };
    default:
      return state;
  }
};


