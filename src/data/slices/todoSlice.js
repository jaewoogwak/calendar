import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      console.log("action.payload", action.payload);
      const { id, eventName, place, date, time } = action.payload.todo;
      const newTodo = {
        id: id,
        eventName: eventName,
        place: place,
        date: date,
        time: time,
      };
      console.log("addTodo", newTodo, state.todos);
      state.todos = [...state.todos, newTodo];
    },
    deleteTodo: (state, action) => {
      console.log("deleteTodo");
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

// Action creator
export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
