import React, { useRef } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setIsOpend, setOpend } from "../../data/slices/todoSlice";
import useTooltip from "../Tooltip/hooks/useTooltip";
import Tooltip from "../Tooltip/Tooltip";
import useClick from "./utils/useClick";

export default function Todo({ item, event, isInSidebar }) {
  const { isOpened, handleClick } = useTooltip();
  const { isClicked, clickedId, todoClick } = useClick();
  const { opend } = useSelector((state) => state.reducers.todos);
  const myRef = useRef();
  const dispatch = useDispatch();
  console.log("클릭아이디비교", "opend:", opend, "clickedId", clickedId);
  const getBoxPos = useCallback(() => {
    const { offsetLeft, offsetTop } = myRef.current.offsetParent;
    return { offsetLeft, offsetTop, isInSidebar };
  }, [myRef, isInSidebar]);

  return (
    <Wrapper
      onClick={(e) => {
        // dispatch(onClickTodo({ id: item.id }));
        handleClick(e);
        todoClick(item.id);
        dispatch(setOpend({ id: item.id }));
      }}
      isClicked={!isInSidebar && isOpened && opend === item.id}
      ref={myRef}
    >
      <Text>
        {item.eventName.length > 6
          ? `${item.eventName.slice(0, 6)}...`
          : item.eventName}
      </Text>
      <Time>{item.startTime}</Time>
      {!isInSidebar && isOpened && opend === item.id && (
        <Tooltip
          key={item.id}
          todo={item}
          e={event}
          getBoxPos={getBoxPos}
          isInSidebar={isInSidebar}
        />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 7px;
  background-color: ${(props) => (props.isClicked ? "skyblue" : "")};
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
