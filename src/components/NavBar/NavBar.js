import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const NavBar = ({ prevPage, onClickTodayBtn, nextPage }) => {
  const { year, month } = useSelector((state) => state.reducers.date.page);
  return (
    <NavBarWrapper>
      <YearAndMonth>
        {year}년 {month}월
      </YearAndMonth>
      <PageController>
        <PageSelector>월</PageSelector>
        <PageSelector>년</PageSelector>
      </PageController>
      <ButtonsWrapper>
        <PrevBtn onClick={prevPage}>{"<"}</PrevBtn>
        <TodayBtn onClick={onClickTodayBtn}>오늘</TodayBtn>
        <NextBtn onClick={nextPage}>{">"}</NextBtn>
      </ButtonsWrapper>
    </NavBarWrapper>
  );
};

const NavBarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #211d27;
`;

const YearAndMonth = styled.h1`
  font-size: 30px;
  font-weight: 800;
  color: white;
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
const PageController = styled.div`
  display: flex;
  width: 100px;
  height: 20px;
  border-radius: 5px;
  border: 0.5px solid #716f75;
  background-color: #716f75;
  color: white;
  margin-top: 10px;
`;
const PageSelector = styled.span`
  border: 1px solid grey;
  border-radius: 5px;
  width: 100%;
  text-align: center;
`;
export default NavBar;
