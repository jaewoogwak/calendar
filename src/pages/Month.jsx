import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import DateList from "../components/DateList/DateList";
import Days from "../components/DayBar/Days";
import Layout from "../components/Layout";

import { setView } from "../data/slices/viewSlice";

export function Month() {
  const currentView = useSelector((state) => state.reducers.view.currentView);
  const { style } = useSelector((state) => state.reducers.view);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setView({ currentView: "month" }));
  }, [currentView, dispatch]);
  return (
    <Layout>
      <Wrapper st={style}>
        <Days />
        <DateList></DateList>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  background-color: ${(props) => props.st.background};
  width: 885px;
  /* margin: 0 auto; */
`;
