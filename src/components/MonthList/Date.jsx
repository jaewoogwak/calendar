import { useSelector } from "react-redux";
import styled from "styled-components";

export const Date = ({
  month,
  date,
  itemYear,
  itemMonth,
  itemDate,
  itemDay,
}) => {
  const { year } = useSelector((state) => state.reducers.date.page);
  const today = `${year}${month}${date}`;
  const clickedDate = `${itemYear}${itemMonth}${itemDate}`;

  return (
    <Wrapper
      isWeekend={itemDay === 0 || itemDay === 6 ? true : false}
      isCurrentMonth={month === itemMonth}
      isToday={today === clickedDate ? true : false}
    >
      {date}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: ${(props) => (props.isWeekend ? "gray" : "white")};
  opacity: ${(props) => (props.isCurrentMonth ? "1" : "0.2")};
  font-size: 12px;
  text-align: center;
  margin-top: 5px;
  margin-right: 6px;
  margin-left: 6px;
`;
