import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import DateList from "../components/DateList/DateList";
import Days from "../components/DayBar/Days";
import Layout from "../components/Layout";
import { setDate2 } from "../data/slices/dateSlice";
import { setModalVisible } from "../data/slices/modalSlice";
import { onClickEmptySpace } from "../data/slices/todoSlice";
import { setView } from "../data/slices/viewSlice";

export function Month() {
  const { mm } = useSelector((state) => state.reducers.date.newBucket);
  const currentView = useSelector((state) => state.reducers.view.currentView);
  const openModal = () => {
    dispatch(setModalVisible(true));
  };

  const dispatch = useDispatch();
  console.log("current page month", mm);
  const [dateId, setDateId] = useState("");
  const onClickDateCell = (id) => {
    console.log("click", id);
    setDateId(id);
    openModal(id);
  };

  useEffect(() => {
    dispatch(setView({ currentView: "month" }));
    // dispatch(
    //   setDate2({
    //     year: new Date().getFullYear(),
    //     month: new Date().getMonth() + 1,
    //   })
    // );
    console.log("useEffect in Month");
  }, [currentView, dispatch]);
  return (
    <Layout>
      <Wrapper onClick={() => dispatch(onClickEmptySpace())}>
        <Days />
        <DateList onClickDateCell={onClickDateCell}></DateList>
      </Wrapper>
    </Layout>
  );
}

const Wrapper = styled.div`
  background-color: #211d27;
  width: 885px;
  /* margin: 0 auto; */
`;
