import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Year from "./pages/Year";
import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import App from "./App";
import store from "./data/store";
import { onClickEmptySpace } from "./data/slices/todoSlice";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
