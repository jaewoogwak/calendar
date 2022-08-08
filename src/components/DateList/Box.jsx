import React from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { onSelectDateBox } from "../../data/slices/dateSlice";
import Todo from "./Todo";

export default function Box({
  id,
  itemYear,
  itemMonth,
  itemDate,
  itemDay,
  onHandleClickDateCell,
}) {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.reducers.todos.todos);
  const { month } = useSelector((state) => state.reducers.date.bucket);
  const today = `${new Date().getFullYear()}${
    new Date().getMonth() + 1
  }${new Date().getDate()}`;
  const clickedDate = `${itemYear}${itemMonth}${itemDate}`;
  const myRef = useRef();
  const boxTodos = todos.filter((todo) => {
    return todo.id?.split("-")[0] === id;
  });
  return (
    <>
      <Wrapper
        isWeekend={itemDay === 0 || itemDay === 6 ? true : false}
        onDoubleClick={() => onHandleClickDateCell(clickedDate)}
        ref={myRef}
      >
        <DateView
          onClick={(e) => {
            e.stopPropagation();
            dispatch(
              onSelectDateBox({
                year: itemYear,
                month: itemMonth,
                date: itemDate,
              })
            );
          }}
          isCurrentMonth={month === itemMonth}
          isToday={today === clickedDate ? true : false}
        >
          <Text isToday={today === clickedDate ? true : false}>
            {itemDate === 1 ? `${itemMonth}월 ${itemDate}일` : `${itemDate}일`}
          </Text>
        </DateView>
        <Todos>
          {boxTodos.length >= 5 ? (
            <>
              {boxTodos.slice(0, 3).map((item) => (
                <Todo key={item.id} item={item}></Todo>
              ))}
              <Remains>그 외 {boxTodos.slice(3).length}개</Remains>
            </>
          ) : (
            boxTodos.map((item) => <Todo key={item.id} item={item}></Todo>)
          )}
        </Todos>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  border: 0.5px solid #716f75;
  width: 125px;
  height: 100px;
  background-color: ${(props) => (props.isWeekend ? "#29262D" : "")};
`;
const DateView = styled.div`
  cursor: pointer;
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
const Remains = styled.div`
  font-size: 12px;
  padding-top: 2px;
  padding-left: 7px;
  color: white;
`;
