import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Month } from "./pages/Month";
import Year from "./pages/Year";
import NavBar from "./components/NavBar/NavBar";
import styled from "styled-components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/month" element={<Year />} />
        </Routes>
      </>
    </BrowserRouter>
  </Provider>
);
