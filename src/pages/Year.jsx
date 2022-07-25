import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { createView } from "../components/DateList/useDate";
import { MonthCell } from "../components/MonthList/MonthCell";
import { setView } from "../features/view/viewSlice";
export default function Year() {
  const MONTH = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const { year } = useSelector((state) => state.reducers.date.page);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setView({ currentView: "year" }));
  });
  return (
    <Wrapper>
      {MONTH.map((month) => {
        let arr = createView(year, month);
        return <MonthCell key={month} month={month} list={arr}></MonthCell>;
      })}
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  background-color: #211d27;
  width: 865px;
  height: 100%;
  margin: 0 auto;
  padding-left: 10px;
  padding-right: 10px;
`;
