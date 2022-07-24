import { useSelector } from "react-redux";
import styled from "styled-components";
import Box from "./Box";

export const DateList = ({ onClickDateCell }) => {
  const bucket = useSelector((state) => state.reducers.date.bucket);
  console.log("bucket in DateList", bucket);
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
const BoxListWrpper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
export default DateList;
