import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { onClickTodo } from "../../data/slices/todoSlice";
import useTooltip from "../Tooltip/hooks/useTooltip";
import TodoInfo from "../Tooltip/Tooltip";

const Todo = ({ item, isClicked, setIsClicked }) => {
  console.log("todo", item);
  const dispatch = useDispatch();
  const { isOpened, handleEnter, handleLeave, handleClick } = useTooltip();

  return (
    <Wrapper
      onClick={(e) => {
        e.stopPropagation();
        handleClick();
        dispatch(onClickTodo({ id: item.id }));
      }}
    >
      <Text>{item.eventName}</Text>
      <Time>{item.time}</Time>
      {isOpened && item.isClicked && <TodoInfo />}
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
