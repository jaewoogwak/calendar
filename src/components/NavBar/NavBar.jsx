import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { onSelectDateBox, setDate2, setNow } from "../../data/slices/dateSlice";
import { setIsClickedTodayBtn } from "../../data/slices/viewSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const { year, month } = useSelector((state) => state.reducers.date.bucket);
  const currentView = useSelector((state) => state.reducers.view.currentView);
  const isClickedTodayBtn = useSelector(
    (state) => state.reducers.view.isClickedTodayBtn
  );
  const onClickTodayBtn = () => {
    dispatch(setIsClickedTodayBtn({ clicked: !isClickedTodayBtn }));
    dispatch(setNow());
    dispatch(
      onSelectDateBox({
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        date: new Date().getDate(),
      })
    );
  };

  const prevPage2 = () => {
    if (currentView === "month") {
      let years = year;
      let months = month;
      if (month - 1 < 1) {
        years = year - 1;
        months = 12;
      } else months = month - 1;
      dispatch(setDate2({ year: years, month: months }));
    } else {
      dispatch(setDate2({ year: year - 1, month: month }));
    }
  };
  const nextPage2 = () => {
    if (currentView === "month") {
      let years = year;
      let months = month;
      if (month + 1 > 12) {
        years = year + 1;
        months = 1;
      } else months = month + 1;
      dispatch(setDate2({ year: years, month: months }));
    } else {
      dispatch(setDate2({ year: year + 1, month: month }));
    }
  };

  return (
    <NavBarWrapper>
      {currentView === "month" ? (
        <YearAndMonth>
          {year}년 {month}월
        </YearAndMonth>
      ) : (
        <YearAndMonth>{year}년</YearAndMonth>
      )}
      <PageController>
        <PageSelector>
          <NavLink
            to={`/year`}
            style={{ textDecoration: "none", color: "white" }}
          >
            년
          </NavLink>
        </PageSelector>
        <PageSelector>
          <NavLink to={`/`} style={{ textDecoration: "none", color: "white" }}>
            월
          </NavLink>
        </PageSelector>
      </PageController>
      <ButtonsWrapper>
        <PrevBtn onClick={prevPage2}>{"<"}</PrevBtn>
        <TodayBtn onClick={onClickTodayBtn}>오늘</TodayBtn>
        <NextBtn onClick={nextPage2}>{">"}</NextBtn>
      </ButtonsWrapper>
    </NavBarWrapper>
  );
};

const NavBarWrapper = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: #211d27;
  margin: 0 auto;
`;

const YearAndMonth = styled.h1`
  padding-left: 20px;
  font-size: 30px;
  font-weight: 800;
  color: white;
`;
const ButtonsWrapper = styled.div`
  align-self: center;
  padding-right: 20px;
`;
const TodayBtn = styled.button`
  cursor: pointer;
  border: 0.5px solid #716f75;
  background-color: #716f75;
  color: white;
  border-radius: 7px;
  margin-left: 2px;
  margin-right: 2px;
`;
const PrevBtn = styled.button`
  cursor: pointer;
  border: 0.5px solid #716f75;
  font-size: 14px;
  background-color: #716f75;
  color: white;
  border-radius: 7px;
`;
const NextBtn = styled.button`
  cursor: pointer;
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
  text-decoration: none;
`;
export default NavBar;
