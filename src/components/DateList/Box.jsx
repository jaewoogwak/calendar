import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { onSelectDateBox } from "../../data/slices/dateSlice";
import Todo from "./Todo";

export default function Box({ id, item, onHandleClickDateCell }) {
  const todos = useSelector((state) => state.reducers.todos.todos);
  const { month } = useSelector((state) => state.reducers.date.bucket);
  const { today } = useSelector((state) => state.reducers.date);
  const { year, month: boxMonth, date, day } = item;
  const { style } = useSelector((state) => state.reducers.view);
  const clickedDate = `${year}${boxMonth}${date}`;

  const boxTodos = todos.filter((todo) => {
    return todo.id?.split("-")[0] === id;
  });
  const dispatch = useDispatch();

  return (
    <>
      <Wrapper
        isWeekend={day === 0 || day === 6 ? true : false}
        onDoubleClick={(e) => {
          onHandleClickDateCell(clickedDate);
        }}
        st={style}
      >
        <DateView
          st={style}
          onClick={(e) => {
            e.stopPropagation();
            dispatch(
              onSelectDateBox({
                year: year,
                month: boxMonth,
                date: date,
              })
            );
          }}
          isCurrentMonth={month === boxMonth}
          isToday={today === clickedDate ? true : false}
        >
          {today === clickedDate ? (
            <Ball st={style} isToday={today === clickedDate ? true : false}>
              {date === 1 ? `${boxMonth}월 ${date}일` : `${date}일`}
            </Ball>
          ) : (
            <Text isToday={today === clickedDate ? true : false}>
              {date === 1 ? `${boxMonth}월 ${date}일` : `${date}일`}
            </Text>
          )}
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
  border: 0.1px solid ${(props) => props.st.boxBorder};
  width: 125px;
  height: 100px;
  background-color: ${(props) => props.st.background};
`;
const DateView = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: end;
  padding-right: 5px;
  padding-top: 5px;
  height: 20px;
  opacity: ${(props) => (props.isCurrentMonth ? "1" : "0.2")};
  color: ${(props) => props.st.text};
`;
const Text = styled.strong`
  z-index: 2;
  position: relative;
  border-radius: 50%;
  height: 30px;
`;
const Ball = styled.div`
  z-index: 1;
  position: absolute;
  padding: 1px;
  border-radius: 30px;
  font-weight: 800;
  background-color: red;
  color: ${(props) => props.st.background};
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
