import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { onSelectDateBox, setDate } from "../../data/slices/dateSlice";
import { setModalVisible } from "../../data/slices/modalSlice";
import Todo from "./Todo";
const Box = ({ id, itemYear, itemMonth, itemDate, itemDay }) => {
  const todos = useSelector((state) => state.reducers.todos.todos);
  const { year, month, currentYear, currentMonth, date } = useSelector(
    (state) => state.reducers.date.page
  );
  const { yy, mm } = useSelector((state) => state.reducers.date.newBucket);

  const today = `${currentYear}${currentMonth}${date}`;
  const clickedDate = `${itemYear}${itemMonth}${itemDate}`;
  const dispatch = useDispatch();
  const openModal = () => {
    dispatch(setModalVisible(true));
  };
  const onHandleClickDateCell = () => {
    dispatch(setDate({ date: clickedDate }));
    openModal();
  };

  return (
    <>
      <Wrapper
        isWeekend={itemDay === 0 || itemDay === 6 ? true : false}
        onDoubleClick={onHandleClickDateCell}
      >
        <DateView
          onClick={(e) => {
            e.stopPropagation();
            console.log("DateView", `${itemMonth}월 ${itemDate}일`);
            dispatch(
              onSelectDateBox({
                year: itemYear,
                month: itemMonth,
                date: itemDate,
              })
            );
          }}
          isCurrentMonth={mm === itemMonth}
          isToday={today === clickedDate ? true : false}
        >
          <Text isToday={today === clickedDate ? true : false}>
            {itemDate === 1 ? `${itemMonth}월 ${itemDate}일` : `${itemDate}일`}
          </Text>
        </DateView>
        <Todos>
          {todos
            .filter((todo) => {
              return todo.id?.split("-")[0] === id;
            })
            .map((item) => (
              <Todo
                key={item.id}
                item={item}
                onDoubleClick={onHandleClickDateCell}
              ></Todo>
            ))}
        </Todos>
        {}
      </Wrapper>
    </>
  );
};

export default Box;

const Wrapper = styled.div`
  border: 0.5px solid #716f75;
  width: 125px;
  height: 100px;
  background-color: ${(props) => (props.isWeekend ? "#29262D" : "")};
`;
const DateView = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
  padding-right: 5px;
  padding-top: 5px;
  color: "white";
  height: 20px;
  opacity: ${(props) => (props.isCurrentMonth ? "1" : "0.2")};
  color: ${(props) => (props.isToday ? "white" : "white")};
`;
const Text = styled.strong`
  z-index: 1;
  border-radius: 50%;
  padding: 1px;
  height: 24px;
  background-color: ${(props) => (props.isToday ? "red" : "")};
`;

const Todos = styled.div`
  position: relative;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  height: 75px;
  padding-top: 5px;
`;
