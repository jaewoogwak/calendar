import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { setDate2, setNow } from "../../data/features/date/dateSlice";
import { setIsClickedTodayBtn } from "../../data/features/view/viewSlice";

const NavBar = () => {
  const dispatch = useDispatch();
  const currentView = useSelector((state) => state.reducers.view.currentView);
  const { currentYear, currentMonth } = useSelector(
    (state) => state.reducers.date.page
  );
  const { yy, mm } = useSelector((state) => state.reducers.date.newBucket);
  console.log("newBucket", yy, mm);
  const isClickedTodayBtn = useSelector(
    (state) => state.reducers.view.isClickedTodayBtn
  );
  const onClickTodayBtn = () => {
    console.log("clicked today btn", currentYear, currentMonth);
    dispatch(setIsClickedTodayBtn({ clicked: !isClickedTodayBtn }));
    dispatch(setNow());
  };

  const prevPage2 = () => {
    if (currentView === "month") {
      let year = yy;
      let month = mm;
      if (mm - 1 < 1) {
        year = yy - 1;
        month = 12;
      } else month = mm - 1;
      dispatch(setDate2({ year: year, month: month }));
    } else {
      dispatch(setDate2({ year: yy - 1, month: mm }));
    }
  };
  const nextPage2 = () => {
    if (currentView === "month") {
      let year = yy;
      let month = mm;
      if (mm + 1 > 12) {
        year = yy + 1;
        month = 1;
      } else month = mm + 1;
      dispatch(setDate2({ year: year, month: month }));
    } else {
      dispatch(setDate2({ year: yy + 1, month: mm }));
    }
  };

  return (
    <NavBarWrapper>
      {currentView === "month" ? (
        <YearAndMonth>
          {yy}년 {mm}월
        </YearAndMonth>
      ) : (
        <YearAndMonth>{yy}년</YearAndMonth>
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
