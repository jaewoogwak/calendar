import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setDate2 } from "../../data/slices/dateSlice";
import { setView } from "../../data/slices/viewSlice";
import Days from "../DayBar/Days";
import DateCell from "./DateCell";

export default function MonthCell({ month, list }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const today = `${new Date()?.getFullYear()}${
    new Date().getMonth() + 1
  }${new Date().getDate()}`;
  const { year } = useSelector((state) => state.reducers.date.bucket);

  const handleSetMonth = () => {
    console.log("handleSetMonth");
    dispatch(setDate2({ year: year, month: month }));
    dispatch(setView({ currentView: "month" }));
    navigate("/");
  };

  return (
    <Wrapper>
      <Month onClick={handleSetMonth}>{month}월</Month>
      <Days size={"12px"} />
      <MonthList>
        {list?.map((item) => (
          <DateCell
            key={`${item.year}${item.month}${item.date}${item.day}`}
            id={`${item.year}${item.month}${item.date}`}
            today={today}
            month={month}
            itemYear={item.year}
            itemMonth={item.month}
            itemDate={item.date}
            itemDay={item.day}
            date={item.date}
          ></DateCell>
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
const Month = styled.div`
  color: red;
  font-size: 18px;
  padding: 10px;
  width: 35px;
  cursor: pointer;
`;
const MonthList = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
