import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dateReducer from "../features/date/dateSlice";
import todoReducer from "../features/todo/todoSlice";
import viewSlice from "../features/view/viewSlice";
const reducers = combineReducers({
  todos: todoReducer,
  date: dateReducer,
  view: viewSlice,
});
const store = configureStore({
  reducer: {
    reducers,
  },
});
export default store;
