import React from "react";
import styled from "styled-components";

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
  opacity: ${(props) => (props.isThisMonth ? "1" : "0.2")};

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
  justify-content: space-around;
`;
const Text = styled.div`
  font-weight: 600;
  color: white;
`;
const Time = styled.div`
  font-size: 10px;
  color: white;
`;

const Box = ({
  todos,
  id,
  today,
  year,
  thisMonth,
  month,
  date,
  day,
  onClickDateCell,
}) => {
  // 클릭한 셀의 아이디를 부모 컴포넌트로 전송(app.js)
  const onHandleClickDateCell = () => {
    onClickDateCell(`${year}${month}${date}`);
  };
  return (
    <Wrapper
      isWeekend={day === 0 || day === 6 ? true : false}
      onDoubleClick={onHandleClickDateCell}
    >
      <DateView
        isThisMonth={thisMonth === month}
        isToday={today === `${year}${month}${date}` ? true : false}
      >
        {date === 1 ? `${month}월 ${date}일` : `${date}일`}
      </DateView>
      <Todos>
        {todos
          .filter((todo) => todo.id === id)
          .map((item) => (
            <Todo>
              <Text>{item.eventName}</Text>
              <Time>{item.time}</Time>
            </Todo>
          ))}
      </Todos>
    </Wrapper>
  );
};

export default Box;
