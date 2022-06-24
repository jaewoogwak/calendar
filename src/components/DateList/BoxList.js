import React from "react";
import styled from "styled-components";
import Box from "./Box";
const BoxListWrpper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
const BoxList = ({ bucket, initDate, pageMonth }) => {
  return (
    <BoxListWrpper>
      {bucket.map((item) => (
        <Box
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

export default BoxList;
