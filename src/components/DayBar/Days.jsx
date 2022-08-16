import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export default function Days({ size }) {
  const DAY = ["일", "월", "화", "수", "목", "금", "토"];
  const { style } = useSelector((state) => state.reducers.view);
  return (
    <DaysWrapper style={style}>
      {DAY.map((day) => (
        <Day key={day.toString()} size={size}>
          {day}
        </Day>
      ))}
    </DaysWrapper>
  );
}
const DaysWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: ${(props) => props.style.background};
  color: ${(props) => props.style.text};
  padding-bottom: 5px;
`;
const Day = styled.span`
  justify-self: end;
  padding-right: 10px;
  font-size: ${(props) => props.size};
  text-align: center;
`;
