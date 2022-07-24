import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Box from "./Box";
const BoxListWrpper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
const DateList = ({ bucket, onClickDateCell }) => {
  return (
    <BoxListWrpper>
      {bucket.map((item) => (
        <Box
          key={`${item.year}${item.month}${item.date}${item.day}`}
          id={`${item.year}${item.month}${item.date}`}
          onClickDateCell={onClickDateCell}
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
