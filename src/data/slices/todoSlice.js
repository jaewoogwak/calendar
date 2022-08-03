import { createSlice, current } from "@reduxjs/toolkit";

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
        isClicked: false,
        test: "",
      };
      console.log("addTodo", newTodo, state.todos);
      state.todos = [...state.todos, newTodo];
    },
    deleteTodo: (state, action) => {
      console.log("deleteTodo");
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    onClickTodo: (state, action) => {
      const id = action.payload.id;
      const clickedTodo = current(state).todos.filter(
        (todo) => todo.id === id
      )[0];
      console.log("onClickTodo", id, clickedTodo);
      current(state).todos.forEach((item) => {
        const tmp = {
          ...item,
          isClicked: false,
        };
        state.todos = state.todos.filter((todo) => todo.id !== item.id);
        state.todos = [...state.todos, tmp];
      });
      const todo = {
        ...clickedTodo,
        isClicked: true,
      };
      state.todos = state.todos.filter((todo) => todo.id !== id);
      state.todos = [...state.todos, todo];
    },
    onClickEmptySpace: (state, action) => {
      console.log("onclickEmptySpace");
      current(state).todos.forEach((item) => {
        const tmp = {
          ...item,
          isClicked: false,
        };
        state.todos = state.todos.filter((todo) => todo.id !== item.id);
        state.todos = [...state.todos, tmp];
      });
    },
  },
});

// Action creator
export const { addTodo, deleteTodo, onClickTodo, onClickEmptySpace } =
  todoSlice.actions;

export default todoSlice.reducer;
