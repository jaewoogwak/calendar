import React from "react";
import styled from "styled-components";
const DaysWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  color: white;
  padding-bottom: 5px;
`;
const Day = styled.span`
  justify-self: end;
  padding-right: 10px;
`;

const Days = ({ dayList }) => {
  return (
    <DaysWrapper>
      {dayList.map((day) => (
        <Day key={day.toString()}>{day}</Day>
      ))}
    </DaysWrapper>
  );
};

export default Days;
