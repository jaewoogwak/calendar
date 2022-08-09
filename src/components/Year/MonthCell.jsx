import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { setDate } from "../../data/slices/dateSlice";
import { setView } from "../../data/slices/viewSlice";
import Days from "../DayBar/Days";
import DateCell from "./DateCell";

export default function MonthCell({ month, list }) {
  const { year } = useSelector((state) => state.reducers.date.bucket);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSetMonth = () => {
    dispatch(setDate({ year: year, month: month }));
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
            month={month}
            item={item}
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
