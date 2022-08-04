import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { onClickTodo } from "../../data/slices/todoSlice";

const Todo = ({ item, isClicked, setIsClicked }) => {
  console.log("todo", item);
  const dispatch = useDispatch();

  return (
    <Wrapper
      isClicked={item.isClicked}
      onClick={(e) => {
        e.stopPropagation();
        dispatch(onClickTodo({ id: item.id }));
      }}
    >
      <Text>{item.eventName}</Text>
      <Time>{item.time}</Time>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 7px;

  background-color: ${(props) => (props.isClicked ? "skyblue" : "")};
`;
const Content = styled.li`
  color: white;
`;
const Text = styled.div`
  font-weight: 600;
  color: white;
`;
const Time = styled.div`
  font-size: 11px;
  color: white;
  padding-right: 5px;
`;
export default Todo;
