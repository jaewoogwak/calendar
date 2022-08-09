import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setView } from "../data/slices/viewSlice";
import { createMonthList } from "../components/DateList/utils/dateArray";
import Layout from "../components/Layout";
import MonthCell from "../components/Year/MonthCell";

export default function Year() {
  const dispatch = useDispatch();
  const currentView = useSelector((state) => state.reducers.view.currentView);
  const { year, month } = useSelector((state) => state.reducers.date.bucket);
  const arr = createMonthList(year, month);

  useEffect(() => {
    dispatch(setView({ currentView: "year" }));
  }, [currentView, dispatch]);

  return (
    <Layout>
      <Wrapper>
        {arr.map((list, idx) => {
          return (
            <MonthCell key={idx + 1} month={idx + 1} list={list}></MonthCell>
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
