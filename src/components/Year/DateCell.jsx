import { useSelector } from "react-redux";
import styled from "styled-components";

export default function Date({ item, month }) {
  const { today } = useSelector((state) => state.reducers.date);
  const { year, month: itemMonth, date, day } = item;
  const { style } = useSelector((state) => state.reducers.view);
  const clickedDate = `${year}${itemMonth}${date}`;

  return (
    <Wrapper
      isWeekend={day === 0 || day === 6 ? true : false}
      isCurrentMonth={month === itemMonth}
      isToday={today === clickedDate ? true : false}
      st={style}
    >
      {date}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  color: ${(props) => (props.isWeekend ? "gray" : props.st.text)};
  opacity: ${(props) => (props.isCurrentMonth ? "1" : "0.2")};
  background-color: ${(props) => (props.isToday ? "red" : "")};
  font-size: 12px;
  text-align: center;
  margin-top: 5px;
  margin-right: 6px;
  margin-left: 6px;
`;
