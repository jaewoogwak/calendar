import { createSlice, current } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    count: 0,
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
      state.todos = state.todos.sort((a, b) => {
        console.log("sorting by time order", a.time, b.time);
        return a.time.split(":")[0] === b.time.split(":")[0]
          ? a.time.split(":")[1] - b.time.split(":")[1]
          : a.time.split(":")[0] === b.time.split(":")[0];
      });
      state.count += 1;
    },
    deleteTodo: (state, action) => {
      console.log("deleteTodo", action.payload.id);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      console.log("editTodo", action.payload.id);
      const id = action.payload.id;
      const clickedTodo = current(state).todos.filter(
        (todo) => todo.id === id
      )[0];
      const editedTodo = {
        ...clickedTodo,
        eventName: action.payload.eventName,
        place: action.payload.place,
        date: action.payload.date,
        time: action.payload.time,
      };
      state.todos = state.todos.filter((todo) => todo.id !== id);
      state.todos = [...state.todos, editedTodo];
      // todo 시간 순 정렬 로직
      state.todos = state.todos.sort((a, b) => {
        console.log("sorting by time order", a.time, b.time);
        return a.time.split(":")[0] === b.time.split(":")[0]
          ? a.time.split(":")[1] - b.time.split(":")[1]
          : a.time.split(":")[0] === b.time.split(":")[0];
      });
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

      // todo 시간 순 정렬 로직
      state.todos = state.todos.sort((a, b) => {
        console.log("sorting by time order", a.time, b.time);
        return a.time.split(":")[0] === b.time.split(":")[0]
          ? a.time.split(":")[1] - b.time.split(":")[1]
          : a.time.split(":")[0] === b.time.split(":")[0];
      });
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
export const { addTodo, deleteTodo, editTodo, onClickTodo } = todoSlice.actions;

export default todoSlice.reducer;
