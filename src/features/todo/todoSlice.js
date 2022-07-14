import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [
      {
        id: "20231220",
        eventName: "뉴욕 여행",
        place: "인천공항 제2 터미널",
        date: "2022-12-20",
        time: "07:00",
      },
    ],
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
