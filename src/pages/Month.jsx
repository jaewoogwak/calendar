import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import DateList from "../components/DateList/DateList";
import Days from "../components/DayBar.js/Days";
import Modal from "../components/Modal/Modal";
import NavBar from "../components/NavBar/NavBar";
import { addTodo } from "../features/todo/todoSlice";

export function Month({
  modalVisible,
  setModalVisible,
  openModal,
  closeModal,
  pageYear,
  pageMonth,
  prevPage,
  onClickTodayBtn,
  nextPage,
  DAY,
  bucket,
  initDate,
  todos,
  setTodos,
  count,
}) {
  const [event, setEvent] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState();
  const [dateId, setDateId] = useState("");
  const dispatch = useDispatch();
  const onClickDateCell = (id) => {
    console.log("click", id);
    paintAddedTodo(id);
    setDateId(id);
    openModal(id);
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

  const handleAddTodo = () => {
    dispatch(
      addTodo({
        todo: {
          id: `${dateId}-${count.current++}`,
          eventName: event,
          place: place,
          date: date,
          time: time,
        },
        type: "addTodo",
      })
    );
  };
  const onClickModalBtn = (e) => {
    const { name } = e.target;
    if (name === "addEvent") {
      console.log(event, place, date, time);
      handleAddTodo();
      setModalVisible((prev) => !prev);
    } else {
      setModalVisible((prev) => !prev);
    }
    setEvent("");
    setPlace("");
    setDate("");
    setTime("");
  };
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
      <Days dayList={DAY}></Days>
      <DateList
        bucket={bucket}
        initDate={initDate}
        pageMonth={pageMonth}
        onClickDateCell={onClickDateCell}
        todos={todos}
      ></DateList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #211d27;
  width: 885px;
  height: 100%;
  margin: 0 auto;
`;
