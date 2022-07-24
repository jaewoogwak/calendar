import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import DateList from "../components/DateList/DateList";
import Days from "../components/DayBar.js/Days";
import Modal from "../components/Modal/Modal";
import { addTodo } from "../features/todo/todoSlice";

export function Month({ openModal, DAY, bucket, initDate }) {
  const [dateId, setDateId] = useState("");
  const onClickDateCell = (id) => {
    console.log("click", id);
    paintAddedTodo(id);
    setDateId(id);
    openModal(id);
  };

  const paintAddedTodo = () => {
    console.log("paintAddedTodo");
  };

  return (
    <Wrapper>
      <Days dayList={DAY}></Days>
      <DateList bucket={bucket} onClickDateCell={onClickDateCell}></DateList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #211d27;
  width: 885px;
  height: 100%;
  margin: 0 auto;
`;
