import React, { useState } from "react";
import styled from "styled-components";
import Box from "./Box";
const BoxListWrpper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
const DateList = ({ bucket, initDate, pageMonth, onClickDateCell, todos }) => {
  return (
    <BoxListWrpper>
      {bucket.map((item) => (
        <Box
          todos={todos}
          id={`${item.year}${item.month}${item.date}`}
          onClickDateCell={onClickDateCell}
          key={`${item.year}${item.month}${item.date}${item.day}`}
          today={`${initDate.getFullYear()}${
            initDate.getMonth() + 1
          }${initDate.getDate()}`}
          year={item.year}
          thisMonth={pageMonth}
          month={item.month}
          date={item.date}
          day={item.day}
        ></Box>
      ))}
    </BoxListWrpper>
  );
};

export default DateList;
