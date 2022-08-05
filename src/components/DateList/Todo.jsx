import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { onClickTodo } from "../../data/slices/todoSlice";
import useTooltip from "../Tooltip/hooks/useTooltip";
import Tooltip from "../Tooltip/Tooltip";

const Todo = ({ item, isClicked, setIsClicked }) => {
  console.log("todo", item);
  const dispatch = useDispatch();
  const { isOpened, handleClick } = useTooltip();

  return (
    <Wrapper
      onClick={(e) => {
        handleClick(e);
        dispatch(onClickTodo({ id: item.id }));
      }}
    >
      <Text>
        {item.eventName.length > 6
          ? `${item.eventName.slice(0, 6)}...`
          : item.eventName}
      </Text>
      <Time>{item.time}</Time>
      {isOpened && item.isClicked && <Tooltip todo={item} />}
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
