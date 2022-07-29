import { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Box from "./Box";
import { createView } from "./useDate";

export const DateList = ({ onClickDateCell }) => {
  const { yy, mm } = useSelector((state) => state.reducers.date.newBucket);
  const arr = createView(yy, mm);
  console.log("DateList", yy, mm, arr);
  return (
    <BoxListWrpper>
      {arr.map((item) => (
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
const BoxListWrpper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
export default DateList;
