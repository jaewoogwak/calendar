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
      const {
        date,
        id,
        eventName,
        place,
        startDate,
        startTime,
        endDate,
        endTime,
      } = action.payload.todo;
      console.log("datedateeee", date);
      const newTodo = {
        date: date,
        id: id,
        eventName: eventName,
        place: place,
        isClicked: false,
        startDate: startDate || date,
        startTime: startTime || "09:00",
        endDate: endDate || date,
        endTime: endTime || "10:00",
      };
      console.log("addTodo", newTodo, state.todos);
      state.todos = [...state.todos, newTodo];
      state.todos = state.todos.sort((a, b) => {
        console.log("sorting by time order", a.startTime, b.startTime);
        return a.startTime.split(":")[0] === b.startTime.split(":")[0]
          ? a.startTime.split(":")[1] - b.startTime.split(":")[1]
          : a.startTime.split(":")[0] === b.startTime.split(":")[0];
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
        startDate: action.payload.startDate,
        startTime: action.payload.startTime,
        endDate: action.payload.endDate,
        endTime: action.payload.endTime,
      };
      state.todos = state.todos.filter((todo) => todo.id !== id);
      state.todos = [...state.todos, editedTodo];
      // todo 시간 순 정렬 로직
      state.todos = state.todos.sort((a, b) => {
        console.log("sorting by time order", a.startTime, b.startTime);
        return a.startTime.split(":")[0] === b.startTime.split(":")[0]
          ? a.startTime.split(":")[1] === b.startTime.split(":")[1]
            ? parseInt(a.id.split("-")[1]) - parseInt(b.id.split("-")[1])
            : a.startTime.split(":")[1] === b.startTime.split(":")[1]
          : a.startTime.split(":")[0] - b.startTime.split(":")[0];
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

      // 아이디 순 정렬 로직
      state.todos = state.todos.sort((a, b) => {
        console.log(
          "sorting by id order and time",
          a.startTime,
          b.startTime,
          a.id.split("-")[1],
          b.id.split("-")[1]
        );
        /*
        우선순위 : 시간 그다음 아이디
        아이디 순으로 정렬 후 시간 비교
        */
        return (state.todos = state.todos.sort((a, b) => {
          console.log("sorting by time order", a.startTime, b.startTime);
          return a.startTime.split(":")[0] === b.startTime.split(":")[0]
            ? a.startTime.split(":")[1] === b.startTime.split(":")[1]
              ? parseInt(a.id.split("-")[1]) - parseInt(b.id.split("-")[1])
              : a.startTime.split(":")[1] === b.startTime.split(":")[1]
            : a.startTime.split(":")[0] - b.startTime.split(":")[0];
        }));
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
