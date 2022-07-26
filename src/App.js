import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import "./App.css";
import { createMonthList, createView } from "./components/DateList/useDate";
import Modal from "./components/Modal/Modal";
import { setBucket, setNow, setYearBucket } from "./features/date/dateSlice";
import { setIsClickedTodayBtn, setView } from "./features/view/viewSlice";
import { Month } from "./pages/Month";
const DAY = ["일", "월", "화", "수", "목", "금", "토"];

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const isClickedTodayBtn = useSelector(
    (state) => state.reducers.view.isClickedTodayBtn
  );
  const { year, month, currentYear, currentMonth } = useSelector(
    (state) => state.reducers.date.page
  );
  const count = useRef(0);
  const dispatch = useDispatch();
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  const handleModal = (state) => {
    setModalVisible(state);
  };

  const setToday = () => {
    const time = new Date();
    dispatch(
      setNow({
        today: { year: time.getFullYear(), month: time.getMonth() + 1 },
      })
    );
  };

  const initView = () => {
    console.log("initView");
    const arr = createView(currentYear, currentMonth);

    dispatch(setBucket({ bucket: arr }));

    //dispatch(setIsClickedTodayBtn({ clicked: true }));
  };

  useEffect(() => {
    dispatch(setView({ currentView: "month" }));
    initView();
    setToday();
  }, [isClickedTodayBtn]);
  return (
    <Wrapper>
      {modalVisible && (
        <Modal
          openModal={openModal}
          visible={modalVisible}
          closable={true}
          maskClosable={true}
          onClose={closeModal}
          setModalVisible={setModalVisible}
          count={count}
        ></Modal>
      )}
      <Month openModal={openModal} DAY={DAY} />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: #211d27;
  width: 885px;
  height: 100%;
  margin: 0 auto;
`;

export default App;
