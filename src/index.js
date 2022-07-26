import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Year from "./pages/Year";
import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/year" element={<Year />} />
        </Routes>
      </>
    </BrowserRouter>
  </Provider>
);
const Wrapper = styled.div`
  background-color: #211d27;
  width: 885px;
  height: 100%;
  margin: 0 auto;
`;
