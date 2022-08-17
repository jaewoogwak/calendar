import React, { useRef } from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setOpend } from "../../data/slices/todoSlice";
import useTooltip from "../Tooltip/hooks/useTooltip";
import Tooltip from "../Tooltip/Tooltip";

export default function Todo({ item, event, isInSidebar }) {
  const { isOpened, handleClick } = useTooltip();
  const { opend } = useSelector((state) => state.reducers.todos);
  const myRef = useRef();
  const dispatch = useDispatch();
  const getBoxPos = useCallback(() => {
    const { offsetLeft, offsetTop } = myRef.current.offsetParent;
    return { offsetLeft, offsetTop, isInSidebar };
  }, [myRef, isInSidebar]);
  const { style } = useSelector((state) => state.reducers.view);
  return (
    <Wrapper
      style={style}
      onClick={(e) => {
        handleClick(e);
        dispatch(setOpend({ id: item.id }));
      }}
      onDoubleClick={(e) => e.stopPropagation()}
      isClicked={!isInSidebar && isOpened && opend === item.id}
      ref={myRef}
    >
      <Text style={style} isInSidebar={isInSidebar}>
        {item.eventName.length > 6
          ? `${item.eventName.slice(0, 6)}...`
          : item.eventName}
      </Text>
      <Time style={style}>{item.startTime}</Time>
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
  color: ${(props) => props.style.text};
  padding-right: ${(props) => (props.isInSidebar ? "50px" : "")};
`;
const Time = styled.div`
  font-size: 11px;
  color: ${(props) => props.style.text};
  padding-right: 5px;
`;
