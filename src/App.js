import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import "./App.css";
import Box from "./components/Box";
import Scroll from "./components/Scroll";
const DAY = ["일", "월", "화", "수", "목", "금", "토"];
const MONTH = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const Wrapper = styled.div`
  background-color: beige;
  width: 885px;
  height: 100%;
  margin: 0 auto;
`;
const BoxList = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`;

const YearAndMonth = styled.h1`
  font-size: 30px;
  font-weight: 800;
`;
const Days = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
const Day = styled.span`
  justify-self: end;
  padding-right: 10px;
`;
const ButtonsWrapper = styled.div`
  align-self: center;
`;
const TodayBtn = styled.button``;
const PrevBtn = styled.button``;
const NextBtn = styled.button``;

function App() {
  const initDate = new Date();

  const [bucket, setBucket] = useState([]);
  const [pageYear, setPageYear] = useState(initDate.getFullYear());
  const [pageMonth, setPageMonth] = useState(initDate.getMonth() + 1);
  const [isClickTodayBtn, setIsClickTodayBtn] = useState(false);

  console.log(bucket);

  const setToday = () => {
    const time = new Date();
    setPageYear(time.getFullYear());
    setPageMonth(time.getMonth() + 1);
  };
  console.log("pageMonth", pageMonth);

  const nextPage = () => {
    let arr = [];
    let time = new Date(pageYear, pageMonth, 1).getTime();
    const first = new Date(time);
    const firstDay = {
      year: first.getFullYear(),
      month: first.getMonth() + 1,
      date: first.getDate(),
      day: first.getDay(),
    };

    time = time - 60 * 60 * 24 * firstDay.day * 1000;
    for (let i = 0; i < 42; i++) {
      const date = new Date(time);
      const dateItem = {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        date: date.getDate(),
        day: date.getDay(),
      };
      arr = arr.concat([dateItem]);
      time = time + 60 * 60 * 24 * 1000;
    }
    setBucket(arr);
    if (pageMonth + 1 > 12) {
      setPageMonth(1);
      setPageYear((prev) => prev + 1);
    } else {
      setPageMonth((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    let arr = [];
    console.log(pageYear, pageMonth - 1);
    let time = new Date(pageYear, pageMonth - 2, 1).getTime();
    const first = new Date(time);

    const firstDay = {
      year: first.getFullYear(),
      month: first.getMonth() + 1,
      date: first.getDate(),
      day: first.getDay(),
    };
    time = time - 60 * 60 * 24 * firstDay.day * 1000;
    for (let i = 0; i < 42; i++) {
      let date = new Date(time);
      const dateItem = {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        date: date.getDate(),
        day: date.getDay(),
      };
      arr = arr.concat([dateItem]);
      time = time + 60 * 60 * 24 * 1000;
    }
    setBucket(arr);
    if (pageMonth - 1 < 1) {
      setPageMonth(12);
      setPageYear((prev) => prev - 1);
    } else {
      setPageMonth((prev) => prev - 1);
    }
  };

  const initView = () => {
    let arr = [];
    let time = new Date(pageYear, pageMonth - 1, 1).getTime();
    const first = new Date(time);

    const firstDay = {
      year: first.getFullYear(),
      month: first.getMonth() + 1,
      date: first.getDate(),
      day: first.getDay(),
    };
    console.log(firstDay);
    time = time - 60 * 60 * 24 * firstDay.day * 1000;
    for (let i = 0; i < 42; i++) {
      let date = new Date(time);
      const dateItem = {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        date: date.getDate(),
        day: date.getDay(),
      };
      arr = arr.concat([dateItem]);
      time = time + 60 * 60 * 24 * 1000;
    }
    setBucket(arr);
    setIsClickTodayBtn(true);
  };

  const onClickTodayBtn = () => {
    setIsClickTodayBtn((prev) => !prev);
  };

  useEffect(() => {
    initView();
    setToday();
  }, [isClickTodayBtn]);
  return (
    <Wrapper>
      <NavBar>
        <YearAndMonth>
          {pageYear}년 {pageMonth}월
        </YearAndMonth>
        <ButtonsWrapper>
          <PrevBtn onClick={prevPage}>{"<"}</PrevBtn>
          <TodayBtn onClick={onClickTodayBtn}>오늘</TodayBtn>
          <NextBtn onClick={nextPage}>{">"}</NextBtn>
        </ButtonsWrapper>
      </NavBar>
      <Days>
        <Day>일</Day>
        <Day>월</Day>
        <Day>화</Day>
        <Day>수</Day>
        <Day>목</Day>
        <Day>금</Day>
        <Day>토</Day>
      </Days>
      <BoxList>
        {bucket.map((item) => (
          <Box
            key={`${item.year}${item.month}${item.date}${item.day}`}
            today={`${initDate.getFullYear()}${
              initDate.getMonth() + 1
            }${initDate.getDate()}`}
            year={item.year}
            thisMonth={pageMonth}
            month={item.month}
            date={item.date}
            day={item.day}
          ></Box>
        ))}
      </BoxList>
    </Wrapper>
  );
}

export default App;
