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
  },
});

// Action creator
export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
