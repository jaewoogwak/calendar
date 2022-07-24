import { useSelector } from "react-redux";
import styled from "styled-components";
import DateList from "../DateList/DateList";
import Days from "../DayBar.js/Days";

export const Month = ({ month, list }) => {
  const bucket = useSelector((state) => state.reducers.date.bucket);

  return (
    <Wrapper>
      <MonthView>{month}</MonthView>
      <Days />
      <MonthList>
        {list.map((item) => (
          <Date>{item.date}</Date>
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
  color: white;
  font-size: 24px;
`;
const MonthList = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
const Date = styled.div`
  color: white;
`;
