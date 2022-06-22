import {
  ADD_TODO,
  DELETE_TODO,
  COMPLETED_TODO,
  CLEAR_COMPLETED_TODO,
  FILTERED_TODO,
} from "../../constants/todos-constants/index";

export const addTodo = (payload) => ({ type: ADD_TODO, payload });
export const deleteTodo = (payload) => ({ type: DELETE_TODO, payload });
export const completedTodo = (payload) => ({ type: COMPLETED_TODO, payload });
export const clearCompletedTodo = () => ({ type: CLEAR_COMPLETED_TODO });
export const filteredTodo = (payload) => ({ type: FILTERED_TODO, payload });
