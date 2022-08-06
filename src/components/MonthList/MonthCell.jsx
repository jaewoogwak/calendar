import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setDate2 } from "../../data/slices/dateSlice";
import { setView } from "../../data/slices/viewSlice";
import Days from "../DayBar/Days";
import Date from "./Date";

export default function MonthCell({ month, list }) {
  const { currentYear, currentMonth, date } = useSelector(
    (state) => state.reducers.date.page
  );
  const { yy, mm } = useSelector((state) => state.reducers.date.newBucket);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleSetMonth = () => {
    console.log("handleSetMonth");
    dispatch(setDate2({ year: yy, month: month }));
    dispatch(setView({ currentView: "month" }));
    navigate("/");
  };
  const today = `${currentYear}${currentMonth}${date}`;
  return (
    <Wrapper>
      <MonthView onDoubleClick={handleSetMonth}>{month}월</MonthView>
      <Days size={"12px"} />
      <MonthList>
        {list?.map((item) => (
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
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 200px;
`;
const MonthView = styled.div`
  color: red;
  font-size: 18px;
  padding: 10px;
  width: 35px;
`;
const MonthList = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
