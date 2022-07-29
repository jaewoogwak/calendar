import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { createView } from "./components/DateList/modules/dateArray";
import Modal from "./components/Modal/Modal";
import NavBar from "./components/NavBar/NavBar";
import { setBucket, setNow } from "./data/slices/dateSlice";
import { Month } from "./pages/Month";
import Year from "./pages/Year";
import "./assets/index.css";
function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const currentView = useSelector((state) => state.reducers.view.currentView);
  console.log("currentView", currentView);
  const isClickedTodayBtn = useSelector(
    (state) => state.reducers.view.isClickedTodayBtn
  );
  const { currentYear, currentMonth } = useSelector(
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

  const setToday = useCallback(() => {
    const time = new Date();
    dispatch(
      setNow({
        today: { year: time.getFullYear(), month: time.getMonth() + 1 },
      })
    );
  }, [dispatch]);

  const initView = useCallback(() => {
    console.log("initView");
    const arr = createView(currentYear, currentMonth);
    dispatch(setBucket({ bucket: arr }));
  }, [currentYear, currentMonth, dispatch]);

  useEffect(() => {
    initView();
    setToday();
  }, [isClickedTodayBtn, setToday, initView, dispatch]);
  return (
    <BrowserRouter>
      <NavBar />
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
      <Routes>
        <Route path="/" element={<Month openModal={openModal} />} />
        <Route path="/year" element={<Year />} />
      </Routes>
    </BrowserRouter>
  );
}
const Wrapper = styled.div`
  background-color: #211d27;
  width: 885px;
  height: 100%;
  margin: 0 auto;
`;

export default App;
