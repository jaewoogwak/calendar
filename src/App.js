import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Month } from "./pages/Month";
const DAY = ["일", "월", "화", "수", "목", "금", "토"];

function App() {
  const initDate = new Date();
  const [modalVisible, setModalVisible] = useState(false);
  const [bucket, setBucket] = useState([]);
  const [pageYear, setPageYear] = useState(initDate.getFullYear());
  const [pageMonth, setPageMonth] = useState(initDate.getMonth() + 1);
  const [isClickTodayBtn, setIsClickTodayBtn] = useState(false);

  const count = useRef(0);
  const dispatch = useDispatch();
  const todos = useSelector((state) => {
    console.log("state", state.todos.todos);
    return state.todos.todos;
  });
  console.log("state!!!", todos);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  //console.log(bucket);

  const setToday = () => {
    const time = new Date();
    setPageYear(time.getFullYear());
    setPageMonth(time.getMonth() + 1);
  };

  const nextPage = () => {
    let arr = [];
    let time = new Date(pageYear, pageMonth, 1).getTime();
    const first = new Date(time);
    const firstDay = {
      year: first.getFullYear(),
      month: first.getMonth() + 1,
      date: first.getDate(),
      day: first.getDay(),
    };

    time = time - 60 * 60 * 24 * firstDay.day * 1000;
    for (let i = 0; i < 42; i++) {
      const date = new Date(time);
      const dateItem = {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        date: date.getDate(),
        day: date.getDay(),
      };
      arr = arr.concat([dateItem]);
      time = time + 60 * 60 * 24 * 1000;
    }
    setBucket(arr);
    if (pageMonth + 1 > 12) {
      setPageMonth(1);
      setPageYear((prev) => prev + 1);
    } else {
      setPageMonth((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    let arr = [];
    console.log(pageYear, pageMonth - 1);
    let time = new Date(pageYear, pageMonth - 2, 1).getTime();
    const first = new Date(time);

    const firstDay = {
      year: first.getFullYear(),
      month: first.getMonth() + 1,
      date: first.getDate(),
      day: first.getDay(),
    };
    time = time - 60 * 60 * 24 * firstDay.day * 1000;
    for (let i = 0; i < 42; i++) {
      let date = new Date(time);
      const dateItem = {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        date: date.getDate(),
        day: date.getDay(),
      };
      arr = arr.concat([dateItem]);
      time = time + 60 * 60 * 24 * 1000;
    }
    setBucket(arr);
    if (pageMonth - 1 < 1) {
      setPageMonth(12);
      setPageYear((prev) => prev - 1);
    } else {
      setPageMonth((prev) => prev - 1);
    }
  };

  const initView = () => {
    let arr = [];
    let time = new Date(pageYear, pageMonth - 1, 1).getTime();
    const first = new Date(time);

    const firstDay = {
      year: first.getFullYear(),
      month: first.getMonth() + 1,
      date: first.getDate(),
      day: first.getDay(),
    };
    console.log(firstDay);
    time = time - 60 * 60 * 24 * firstDay.day * 1000;
    for (let i = 0; i < 42; i++) {
      let date = new Date(time);
      const dateItem = {
        id: `${date.getFullYear()}${date.getMonth() + 1}${date.getDate()}`,
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        date: date.getDate(),
        day: date.getDay(),
      };
      arr = arr.concat([dateItem]);
      time = time + 60 * 60 * 24 * 1000;
    }
    setBucket(arr);
    setIsClickTodayBtn(true);
  };

  const onClickTodayBtn = () => {
    setIsClickTodayBtn((prev) => !prev);
  };

  useEffect(() => {
    initView();
    setToday();
  }, [isClickTodayBtn]);
  return (
    <>
      <NavBar
        pageYear={pageYear}
        pageMonth={pageMonth}
        prevPage={prevPage}
        onClickTodayBtn={onClickTodayBtn}
        nextPage={nextPage}
      ></NavBar>
      <Month
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        openModal={openModal}
        closeModal={closeModal}
        pageYear={pageYear}
        pageMonth={pageMonth}
        prevPage={prevPage}
        onClickTodayBtn={onClickTodayBtn}
        nextPage={nextPage}
        DAY={DAY}
        bucket={bucket}
        initDate={initDate}
        todos={todos}
        count={count}
      />
    </>
  );
}

export default App;
