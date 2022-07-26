import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { createMonthList, createView } from "../components/DateList/useDate";
import { MonthCell } from "../components/MonthList/MonthCell";
import { setYearBucket } from "../features/date/dateSlice";
import { setView } from "../features/view/viewSlice";
export default function Year() {
  const dispatch = useDispatch();

  const MONTH = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const { year, currentYear, month, currentMonth } = useSelector(
    (state) => state.reducers.date.page
  );
  //const { yearBucket } = useSelector((state) => state.reducers.date);
  // const isClickedTodayBtn = useSelector(
  //   (state) => state.reducers.view.isClickedTodayBtn
  // );
  // console.log("isClickedTodayBtn", isClickedTodayBtn);
  console.log("current page year", year, month, currentYear, currentMonth);
  const arr = createMonthList(year);
  console.log("arr", arr);
  useEffect(() => {
    dispatch(setView({ currentView: "year" }));
  });
  return (
    <Wrapper>
      {arr.map((month, idx) => {
        return (
          <MonthCell key={idx + 1} month={idx + 1} list={month}></MonthCell>
        );
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
