import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setBucket } from "../../features/date/dateSlice";
import Days from "../DayBar.js/Days";
import { Date } from "./Date";

export const MonthCell = ({ month, list }) => {
  const dispatch = useDispatch();
  const { currentYear, currentMonth, date } = useSelector(
    (state) => state.reducers.date.page
  );

  const today = `${currentYear}${currentMonth}${date}`;
  useEffect(() => {
    dispatch(setBucket({ bucket: list }));
  });
  return (
    <Wrapper>
      <MonthView>{month}월</MonthView>
      <Days size={"12px"} />
      <MonthList>
        {list.map((item) => (
          <Date
            key={`${item.year}${item.month}${item.date}${item.day}`}
            id={`${item.year}${item.month}${item.date}`}
            today={today}
            month={month}
            itemYear={item.year}
            itemMonth={item.month}
            itemDate={item.date}
            itemDay={item.day}
            date={item.date}
          ></Date>
        ))}
      </MonthList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
`;
const MonthView = styled.div`
  color: red;
  font-size: 18px;
  padding: 10px;
`;
const MonthList = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
