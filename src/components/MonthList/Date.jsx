import styled from "styled-components";

export const Date = ({
  month,
  date,
  today,
  itemYear,
  itemMonth,
  itemDate,
  itemDay,
}) => {
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
  background-color: ${(props) => (props.isToday ? "red" : "")};
  font-size: 12px;
  text-align: center;
  margin-top: 5px;
  margin-right: 6px;
  margin-left: 6px;
`;
