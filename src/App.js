import { useEffect, useState } from "react";
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
  const [thisYear, setThisYear] = useState(2022);
  const [thisMonth, setThisMonth] = useState(new Date().getMonth());
  const [thisDate, setThisDate] = useState(0);
  const [thisDay, setThisDay] = useState("");
  const [bucket, setBucket] = useState([]);

  const setToday = () => {
    const time = new Date();

    setThisYear(time.getFullYear());
    setThisMonth(time.getMonth() + 1);
    setThisDate(time.getDate());
    setThisDay(time.getDay());
  };
  const Paint = () => {
    let arr = [];
    console.log(thisYear, thisMonth - 1, 29);
    let time = new Date(thisYear, thisMonth - 1, 28).getTime();
    for (let i = 0; i < 42; i++) {
      time = time + 60 * 60 * 24 * 1000;
      let date = new Date(time);
      const dateItem = {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        date: date.getDate(),
        day: date.getDay(),
      };
      console.log("dateItem", dateItem);
      arr = arr.concat([dateItem]);
    }
    setBucket(arr);
  };
  const initView = () => {
    let arr = [];
    console.log(thisYear, thisMonth);
    let time = new Date(thisYear, thisMonth, 1).getTime();
    const first = new Date(time);

    const firstItem = {
      year: first.getFullYear(),
      month: first.getMonth() + 1,
      date: first.getDate(),
      day: first.getDay(),
    };
    time = time - 60 * 60 * 24 * firstItem.day * 1000;
    for (let i = 0; i < 42; i++) {
      let date = new Date(time);
      const dateItem = {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        date: date.getDate(),
        day: date.getDay(),
      };
      //console.log("dateItem", dateItem);
      arr = arr.concat([dateItem]);
      time = time + 60 * 60 * 24 * 1000;
    }
    setBucket(arr);
  };

  useEffect(() => {
    initView();
    setToday();
  }, []);
  return (
    <Wrapper>
      <NavBar>
        <YearAndMonth>
          {thisYear}년 {thisMonth}월
        </YearAndMonth>
        <ButtonsWrapper>
          <PrevBtn>{"<"}</PrevBtn>
          <TodayBtn>오늘</TodayBtn>
          <NextBtn>{">"}</NextBtn>
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
            today={`${thisYear}${thisMonth}${thisDate}`}
            year={item.year}
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
