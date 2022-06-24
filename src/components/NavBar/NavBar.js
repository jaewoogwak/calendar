import React from "react";
import styled from "styled-components";

const NavBarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
`;

const YearAndMonth = styled.h1`
  font-size: 30px;
  font-weight: 800;
  color: white;
`;
const Days = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  color: white;
  padding-bottom: 5px;
`;
const Day = styled.span`
  justify-self: end;
  padding-right: 10px;
`;
const ButtonsWrapper = styled.div`
  align-self: center;
`;
const TodayBtn = styled.button`
  border: 0.5px solid #716f75;
  background-color: #716f75;
  color: white;
  border-radius: 7px;
  margin-left: 2px;
  margin-right: 2px;
`;
const PrevBtn = styled.button`
  border: 0.5px solid #716f75;
  font-size: 14px;
  background-color: #716f75;
  color: white;
  border-radius: 7px;
`;
const NextBtn = styled.button`
  border: 0.5px solid #716f75;
  font-size: 14px;
  background-color: #716f75;
  color: white;
  border-radius: 7px;
`;
const NavBar = ({
  pageYear,
  pageMonth,
  prevPage,
  onClickTodayBtn,
  nextPage,
}) => {
  return (
    <NavBarWrapper>
      <YearAndMonth>
        {pageYear}년 {pageMonth}월
      </YearAndMonth>
      <ButtonsWrapper>
        <PrevBtn onClick={prevPage}>{"<"}</PrevBtn>
        <TodayBtn onClick={onClickTodayBtn}>오늘</TodayBtn>
        <NextBtn onClick={nextPage}>{">"}</NextBtn>
      </ButtonsWrapper>
    </NavBarWrapper>
  );
};

export default NavBar;
