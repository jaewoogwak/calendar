import { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import Box from "./components/Box";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  background-color: beige;
  width: 885px;
  height: 100vh;
  margin: 0 auto;
`;

const DAY = ["일", "월", "화", "수", "목", "금", "토"];
const MONTH = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function App() {
  const [thisYear, setThisYear] = useState(2022);
  const [thisMonth, setThisMonth] = useState(0);
  const [thisDate, setThisDate] = useState(0);
  const [thisDay, setThisDay] = useState("");
  const [bucket, setBucket] = useState([]);

  const generateBucketItems = () => {
    let arr = [];
    let time = new Date().getTime();
    time = time - 60 * 60 * 24 * 1000 * 30;
    for (let i = 0; i < 60; i++) {
      time = time + 60 * 60 * 24 * 1000;
      let date = new Date(time);
      const dateItem = {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        date: date.getDate(),
        day: date.getDay(),
      };
      arr = arr.concat([dateItem]);
    }
    setBucket(arr);
  };
  const setToday = () => {
    const time = new Date();

    setThisYear(time.getFullYear());
    setThisMonth(time.getMonth() + 1);
    setThisDate(time.getDate());
    setThisDay(time.getDay());
  };
  console.log("bucket ", bucket);
  useEffect(() => {
    generateBucketItems();
    setToday();
  }, []);
  return (
    <Wrapper>
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
    </Wrapper>
  );
}

export default App;
