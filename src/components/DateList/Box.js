import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setDate } from "../../features/date/dateSlice";

const Box = ({
  id,
  itemYear,
  itemMonth,
  itemDate,
  itemDay,
  onClickDateCell,
}) => {
  const todos = useSelector((state) => state.reducers.todos.todos);
  const { year, month, date } = useSelector(
    (state) => state.reducers.date.page
  );
  const today = `${year}${month}${date}`;
  const clickedDate = `${itemYear}${itemMonth}${itemDate}`;
  const dispatch = useDispatch();
  const [isClicked, setIsClicked] = useState(false); // 클릭한 셀의 아이디를 부모 컴포넌트로 전송(app.js)

  const onHandleClickDateCell = () => {
    dispatch(setDate({ date: clickedDate }));
    onClickDateCell(clickedDate);
  };

  return (
    <Wrapper
      isWeekend={itemDay === 0 || itemDay === 6 ? true : false}
      onDoubleClick={onHandleClickDateCell}
      onClick={() => (isClicked === true ? setIsClicked(false) : null)}
    >
      <DateView
        isThisitemMonth={month === itemMonth}
        isToday={today === clickedDate ? true : false}
      >
        {itemDate === 1 ? `${itemMonth}월 ${itemDate}일` : `${itemDate}일`}
      </DateView>
      <Todos>
        {todos
          .filter((todo) => {
            return todo.id?.split("-")[0] === id;
          })
          .map((item) => (
            <Todo
              key={item.id}
              isClicked={isClicked}
              onClick={() => setIsClicked(true)}
            >
              <Text>{item.eventName}</Text>
              <Time>{item.time}</Time>
            </Todo>
          ))}
      </Todos>
    </Wrapper>
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
  text-align: right;
  padding-top: 5px;
  padding-right: 10px;
  color: "white";
  height: 20px;
  background-color: ${(props) => (props.isToday ? "red" : "")};
  opacity: ${(props) => (props.isThisitemMonth ? "1" : "0.2")};

  color: ${(props) => (props.isToday ? "white" : "white")};
`;
const Todos = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  height: 75px;
  padding-top: 5px;
`;
const Todo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 7px;

  background-color: ${(props) => (props.isClicked ? "skyblue" : "")};
`;
const Text = styled.div`
  font-weight: 600;
  color: white;
`;
const Time = styled.div`
  font-size: 10px;
  color: white;
`;
