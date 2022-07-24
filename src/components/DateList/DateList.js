import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Box from "./Box";
const BoxListWrpper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
const DateList = ({ bucket, onClickDateCell }) => {
  const { year, month, date } = useSelector(
    (state) => state.reducers.date.page
  );
  const today = `${year}${month}${date}`;
  return (
    <BoxListWrpper>
      {bucket.map((item) => (
        <Box
          key={`${item.year}${item.month}${item.date}${item.day}`}
          id={`${item.year}${item.month}${item.date}`}
          onClickDateCell={onClickDateCell}
          today={today}
          thisMonth={month}
          itemYear={item.year}
          itemMonth={item.month}
          itemDate={item.date}
          itemDay={item.day}
        ></Box>
      ))}
    </BoxListWrpper>
  );
};

export default DateList;
