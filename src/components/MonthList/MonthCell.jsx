import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setBucket } from "../../features/date/dateSlice";
import DateList from "../DateList/DateList";
import { createView } from "../DateList/useDate";
import Days from "../DayBar.js/Days";
import { Date } from "./Date";

export const MonthCell = ({ month, list }) => {
  const dispatch = useDispatch();
  const bucket = useSelector((state) => state.reducers.date.bucket);
  const { year, currentMonth, date } = useSelector(
    (state) => state.reducers.date.page
  );

  const today = `${year}${currentMonth}${date}`;
  console.log("today in Monthcell", today);
  useEffect(() => {
    dispatch(setBucket({ bucket: list }));
  }, []);
  console.log("bucket!!!", bucket);
  return (
    <Wrapper>
      <MonthView>{month}월</MonthView>
      <Days size={"12px"} />
      <MonthList>
        {list.map((item) => (
          <Date
            key={`${item.year}${item.month}${item.date}${item.day}`}
            id={`${item.year}${item.month}${item.date}`}
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
  border: 1px solid gray;
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
// const Date = styled.div`
//   color: white;
// `;
