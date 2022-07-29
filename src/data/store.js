import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dateReducer from "./slices/dateSlice";
import todoReducer from "./slices/todoSlice";
import viewReducer from "./slices/viewSlice";

const reducers = combineReducers({
  todos: todoReducer,
  date: dateReducer,
  view: viewReducer,
});
const store = configureStore({
  reducer: {
    reducers,
  },
});
export default store;
