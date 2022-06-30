import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import DateList from "./components/DateList/DateList";
import Days from "./components/DayBar.js/Days";
import Modal from "./components/Modal/Modal";
import NavBar from "./components/NavBar/NavBar";
const DAY = ["일", "월", "화", "수", "목", "금", "토"];

const Wrapper = styled.div`
  background-color: #211d27;
  width: 885px;
  height: 100%;
  margin: 0 auto;
`;

function App() {
  const initDate = new Date();
  const [modalVisible, setModalVisible] = useState(false);
  const [bucket, setBucket] = useState([]);
  const [pageYear, setPageYear] = useState(initDate.getFullYear());
  const [pageMonth, setPageMonth] = useState(initDate.getMonth() + 1);
  const [isClickTodayBtn, setIsClickTodayBtn] = useState(false);
  const [todos, setTodos] = useState([]);
  const [event, setEvent] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState();
  const [dateId, setDateId] = useState("");
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  console.log(bucket);

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

  const onClickDateCell = (id) => {
    console.log("click", id);
    paintAddedTodo(id);
    setDateId(id);
    openModal(id);
  };

  const addTodo = () => {
    console.log("addTodo");
  };

  const paintAddedTodo = () => {
    console.log("paintAddedTodo");
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "event") {
      setEvent(value);
      console.log(name, value);
    } else if (name === "place") {
      setPlace(value);
      console.log(name, value);
    } else if (name === "date") {
      console.log(name, value);
      setDate(value);
    } else {
      console.log(name, value);
      setTime(value);
    }
  };

  const onClickModalBtn = (e) => {
    const { name } = e.target;
    if (name === "addEvent") {
      console.log(event, place, date, time);
      setModalVisible((prev) => !prev);
    } else {
      setModalVisible((prev) => !prev);
    }
  };
  useEffect(() => {
    initView();
    setToday();
  }, [isClickTodayBtn]);
  return (
    <Wrapper>
      {modalVisible && (
        <Modal
          visible={modalVisible}
          closable={true}
          maskClosable={true}
          onClose={closeModal}
          dateId={dateId}
          event={event}
          place={place}
          time={time}
          onChange={onChange}
          onClickModalBtn={onClickModalBtn}
        ></Modal>
      )}
      <NavBar
        pageYear={pageYear}
        pageMonth={pageMonth}
        prevPage={prevPage}
        onClickTodayBtn={onClickTodayBtn}
        nextPage={nextPage}
      ></NavBar>
      <Days dayList={DAY}></Days>
      <DateList
        bucket={bucket}
        initDate={initDate}
        pageMonth={pageMonth}
        onClickDateCell={onClickDateCell}
      ></DateList>
    </Wrapper>
  );
}

export default App;
