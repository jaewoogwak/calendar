import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 0.5px solid black;
  width: 125px;
  height: 100px;
  opacity: ${(props) => (props.isThisMonth ? "1" : "0.2")};
`;
const DateView = styled.div`
  text-align: right;
  padding-top: 5px;
  padding-right: 10px;
  height: 20px;
  background-color: ${(props) => (props.isToday ? "red" : "")};
  color: ${(props) => (props.isToday ? "white" : "")};
`;
const Todos = styled.div`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  height: 75px;
`;
const Todo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const Text = styled.div`
  font-weight: 600;
`;
const Time = styled.div`
  font-size: 10px;
  align-self: center;
`;

const Box = ({ today, year, thisMonth, month, date, day }) => {
  return (
    <Wrapper isThisMonth={thisMonth === month}>
      <DateView isToday={today === `${year}${month}${date}` ? true : false}>
        {month}월{date}일
      </DateView>
      <Todos>
        <Todo>
          <Text>할 일 1</Text>
          <Time>오전 9시</Time>
        </Todo>
        <Todo>
          <Text>할 일 2</Text>
          <Time>오후 3시</Time>
        </Todo>
      </Todos>
    </Wrapper>
  );
};

export default Box;
