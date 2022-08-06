import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import DateList from "../components/DateList/DateList";
import Days from "../components/DayBar/Days";
import Layout from "../components/Layout";

import { setView } from "../data/slices/viewSlice";

export function Month() {
  const currentView = useSelector((state) => state.reducers.view.currentView);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setView({ currentView: "month" }));
  }, [currentView, dispatch]);
  return (
    <Layout>
      <Wrapper>
        <Days />
        <DateList></DateList>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  background-color: #211d27;
  width: 885px;
  /* margin: 0 auto; */
`;
