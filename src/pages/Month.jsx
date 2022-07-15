import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import DateList from "../components/DateList/DateList";
import Days from "../components/DayBar.js/Days";
import Modal from "../components/Modal/Modal";
import { addTodo } from "../features/todo/todoSlice";

export function Month({
  modalVisible,
  setModalVisible,
  openModal,
  closeModal,
  pageMonth,
  DAY,
  bucket,
  initDate,
  todos,
  count,
}) {
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

  return (
    <Wrapper>
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
