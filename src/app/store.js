import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dateReducer from "../features/date/dateSlice";
import todoReducer from "../features/todo/todoSlice";
const reducers = combineReducers({
  todos: todoReducer,
  date: dateReducer,
});
const store = configureStore({
  reducer: {
    reducers,
  },
});
export default store;
