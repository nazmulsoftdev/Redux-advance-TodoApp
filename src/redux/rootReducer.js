import { combineReducers } from "redux";
import filterReducer from "./filter/filterReducer";

import todoReducer from "./todo/todoReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  todoFilters: filterReducer,
});

export default rootReducer;
