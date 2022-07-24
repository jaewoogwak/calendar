import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import "./App.css";
import Modal from "./components/Modal/Modal";
import NavBar from "./components/NavBar/NavBar";
import { nextMonth, prevMonth, setNow } from "./features/date/dateSlice";
import { Month } from "./pages/Month";
const DAY = ["일", "월", "화", "수", "목", "금", "토"];

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [bucket, setBucket] = useState([]);
  const [isClickTodayBtn, setIsClickTodayBtn] = useState(false);
  const { year, month } = useSelector((state) => state.reducers.date.page);
  const todos = useSelector((state) => {
    console.log("state", state.reducers.todos);
    return state.reducers.todos.todos;
  });
  const count = useRef(0);
  const dispatch = useDispatch();

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const handleModal = (state) => {
    setModalVisible(state);
  };

  const setToday = () => {
    const time = new Date();
    dispatch(
      setNow({
        today: { year: time.getFullYear(), month: time.getMonth() + 1 },
      })
    );
    //setPageYear(time.getFullYear());
    //setPageMonth(time.getMonth() + 1);
  };

  const nextPage = () => {
    let arr = [];
    let time = new Date(year, month, 1).getTime();
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
    dispatch(nextMonth());
  };

  const prevPage = () => {
    let arr = [];
    console.log(year, month - 1);
    let time = new Date(year, month - 2, 1).getTime();
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
    dispatch(prevMonth());
  };

  const initView = () => {
    let arr = [];
    let time = new Date(year, month - 1, 1).getTime();
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
    <Wrapper>
      {modalVisible && (
        <Modal
          openModal={openModal}
          visible={modalVisible}
          closable={true}
          maskClosable={true}
          onClose={closeModal}
          setModalVisible={setModalVisible}
          count={count}
        ></Modal>
      )}
      <NavBar
        prevPage={prevPage}
        onClickTodayBtn={onClickTodayBtn}
        nextPage={nextPage}
      ></NavBar>
      <Month
        pageYear={year}
        pageMonth={month}
        prevPage={prevPage}
        openModal={openModal}
        onClickTodayBtn={onClickTodayBtn}
        nextPage={nextPage}
        DAY={DAY}
        bucket={bucket}
        todos={todos}
        count={count}
      />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: #211d27;
  width: 885px;
  height: 100%;
  margin: 0 auto;
`;

export default App;
