import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  nextMonth,
  nextYear,
  prevMonth,
  prevYear,
  setBucket,
} from "../../features/date/dateSlice";
import { setIsClickedTodayBtn } from "../../features/view/viewSlice";
import { createNextPage, createPreviousPage } from "./useNavBar";

const NavBar = () => {
  const dispatch = useDispatch();
  const currentView = useSelector((state) => state.reducers.view.currentView);
  const { year, month } = useSelector((state) => state.reducers.date.page);
  const isClickedTodayBtn = useSelector(
    (state) => state.reducers.view.isClickedTodayBtn
  );
  const onClickTodayBtn = () => {
    if (isClickedTodayBtn) dispatch(setIsClickedTodayBtn({ clicked: false }));
    else dispatch(setIsClickedTodayBtn({ clicked: true }));
  };
  const prevPage = () => {
    let arr = [];
    if (currentView === "month") {
      arr = createPreviousPage(year, month);
      dispatch(prevMonth());
    } else {
      arr = createPreviousPage(year, month);
      dispatch(prevYear());
    }
    dispatch(setBucket({ bucket: arr }));
  };
  const nextPage = () => {
    let arr = [];
    if (currentView === "month") {
      arr = createNextPage(year, month);
      dispatch(nextMonth());
    } else {
      arr = createNextPage(year, month);
      dispatch(nextYear());
    }
    dispatch(setBucket({ bucket: arr }));
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
        <PrevBtn onClick={prevPage}>{"<"}</PrevBtn>
        <TodayBtn onClick={onClickTodayBtn}>오늘</TodayBtn>
        <NextBtn onClick={nextPage}>{">"}</NextBtn>
      </ButtonsWrapper>
    </NavBarWrapper>
  );
};

const NavBarWrapper = styled.nav`
  display: flex;
  width: 885px;
  justify-content: space-between;
  /* padding-left: 20px;
  padding-right: 20px; */
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
  text-decoration: none;
`;
export default NavBar;
