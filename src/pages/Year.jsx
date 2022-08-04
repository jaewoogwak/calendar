import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setView } from "../data/slices/viewSlice";
import { MonthCell } from "../components/MonthList/MonthCell";
import { createMonthList } from "../components/DateList/modules/dateArray";
import { setDate2 } from "../data/slices/dateSlice";
import Layout from "../components/Layout";
export default function Year() {
  const dispatch = useDispatch();
  const currentView = useSelector((state) => state.reducers.view.currentView);
  const { yy, mm } = useSelector((state) => state.reducers.date.newBucket);
  const arr = createMonthList(yy, mm);
  console.log("Year page", yy, mm, arr);

  useEffect(() => {
    dispatch(setView({ currentView: "year" }));
    // dispatch(
    //   setDate2({
    //     year: new Date().getFullYear(),
    //     month: new Date().getMonth() + 1,
    //   })
    // );
    console.log("useEffect in Year");
  }, [currentView, dispatch]);

  return (
    <Layout>
      <Wrapper>
        {arr.map((month, idx) => {
          return (
            <MonthCell key={idx + 1} month={idx + 1} list={month}></MonthCell>
          );
        })}
      </Wrapper>
    </Layout>
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
