import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createView } from "./components/DateList/modules/dateArray";
import { setBucket, setNow } from "./data/slices/dateSlice";
import { Month } from "./pages/Month";
import Year from "./pages/Year";
import "./assets/index.css";

function App() {
  const isClickedTodayBtn = useSelector(
    (state) => state.reducers.view.isClickedTodayBtn
  );
  const { currentYear, currentMonth } = useSelector(
    (state) => state.reducers.date.page
  );

  const dispatch = useDispatch();

  const setToday = useCallback(() => {
    const time = new Date();
    dispatch(
      setNow({
        today: { year: time.getFullYear(), month: time.getMonth() + 1 },
      })
    );
  }, [dispatch]);

  const initView = useCallback(() => {
    const arr = createView(currentYear, currentMonth);
    dispatch(setBucket({ bucket: arr }));
  }, [currentYear, currentMonth, dispatch]);

  useEffect(() => {
    initView();
    setToday();
  }, [isClickedTodayBtn, setToday, initView, dispatch]);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Month />} />
        <Route path="/year" element={<Year />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
