import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { setNow } from "./data/slices/dateSlice";
import { Month } from "./pages/Month";
import Year from "./pages/Year";
import "./assets/index.css";

function App() {
  const dispatch = useDispatch();
  const isClickedTodayBtn = useSelector(
    (state) => state.reducers.view.isClickedTodayBtn
  );
  const setToday = useCallback(() => {
    const time = new Date();
    dispatch(
      setNow({
        today: { year: time.getFullYear(), month: time.getMonth() + 1 },
      })
    );
  }, [dispatch]);

  useEffect(() => {
    setToday();
  }, [isClickedTodayBtn, setToday, dispatch]);
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
