import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import DateList from "../components/DateList/DateList";
import Days from "../components/DayBar/Days";

export function Month({ openModal, DAY }) {
  const { month } = useSelector((state) => state.reducers.date.page);
  console.log("current page month", month);
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
      <DateList onClickDateCell={onClickDateCell}></DateList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #211d27;
  width: 885px;
  height: 100%;
  margin: 0 auto;
`;
