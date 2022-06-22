import { combineReducers } from "redux";
import { counterReducer } from "./counter/counterReducer";
import { filterReducer } from "./filter/filterReducer";
import { todosReducer } from "./todos/todosReducer";

export const rootReducer = combineReducers({
  todos: todosReducer,
  counter: counterReducer,
  filter: filterReducer, 
});
