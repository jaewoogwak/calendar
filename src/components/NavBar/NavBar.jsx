import React from "react";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { onSelectDateBox, setDate, setNow } from "../../data/slices/dateSlice";
import { onToggle, setIsClickedTodayBtn } from "../../data/slices/viewSlice";

const NavBar = () => {
  const { year, month } = useSelector((state) => state.reducers.date.bucket);
  const { mode, style } = useSelector((state) => state.reducers.view);
  const currentView = useSelector((state) => state.reducers.view.currentView);
  const isClickedTodayBtn = useSelector(
    (state) => state.reducers.view.isClickedTodayBtn
  );
  const dispatch = useDispatch();
  const onClickTodayBtn = useCallback(() => {
    dispatch(setIsClickedTodayBtn({ clicked: !isClickedTodayBtn }));
    dispatch(setNow());
    dispatch(
      onSelectDateBox({
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        date: new Date().getDate(),
      })
    );
  }, [dispatch, isClickedTodayBtn]);

  const prevPage = () => {
    if (currentView === "month") {
      let years = year;
      let months = month;
      if (month - 1 < 1) {
        years = year - 1;
        months = 12;
      } else months = month - 1;
      dispatch(setDate({ year: years, month: months }));
    } else {
      dispatch(setDate({ year: year - 1, month: month }));
    }
  };
  const nextPage = () => {
    if (currentView === "month") {
      let years = year;
      let months = month;
      if (month + 1 > 12) {
        years = year + 1;
        months = 1;
      } else months = month + 1;
      dispatch(setDate({ year: years, month: months }));
    } else {
      dispatch(setDate({ year: year + 1, month: month }));
    }
  };
  const onClickToggle = (mode) => {
    dispatch(onToggle());
  };
  return (
    <NavBarWrapper st={style}>
      {currentView === "month" ? (
        <YearAndMonth st={style}>
          {year}년 {month}월
        </YearAndMonth>
      ) : (
        <YearAndMonth st={style}>
          {year}년 <Disabled>{month}월</Disabled>
        </YearAndMonth>
      )}
      <PageController st={style}>
        <PageSelector>
          <NavLink
            to={`/year`}
            style={{
              textDecoration: "none",
              color: style.text,
            }}
          >
            년
          </NavLink>
        </PageSelector>
        <PageSelector>
          <NavLink
            to={`/`}
            style={{ textDecoration: "none", color: style.text }}
          >
            월
          </NavLink>
        </PageSelector>
      </PageController>
      <>
        <ButtonsWrapper>
          <Toggle st={style} onClick={onClickToggle}>
            {mode === "dark" ? "Light" : "Dark"}
          </Toggle>

          <PrevBtn st={style} onClick={prevPage}>
            {"<"}
          </PrevBtn>
          <TodayBtn st={style} onClick={onClickTodayBtn}>
            오늘
          </TodayBtn>
          <NextBtn st={style} onClick={nextPage}>
            {">"}
          </NextBtn>
        </ButtonsWrapper>
      </>
    </NavBarWrapper>
  );
};

const NavBarWrapper = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: ${(props) => props.st.background};
  margin: 0 auto;
`;

const YearAndMonth = styled.h1`
  padding-left: 20px;
  font-size: 30px;
  font-weight: 800;
  color: ${(props) => props.st.text};
`;
const ButtonsWrapper = styled.div`
  align-self: center;
  padding-right: 20px;
`;
const TodayBtn = styled.button`
  cursor: pointer;
  border: 0.5px solid ${(props) => props.st.boxBorder};
  background-color: ${(props) => props.st.pageControllerBg};
  color: ${(props) => props.st.text};
  border-radius: 7px;
  margin-left: 2px;
  margin-right: 2px;
`;
const PrevBtn = styled.button`
  cursor: pointer;
  border: 0.5px solid ${(props) => props.st.boxBorder};
  font-size: 14px;
  background-color: ${(props) => props.st.pageControllerBg};
  color: ${(props) => props.st.text};
  border-radius: 7px;
`;
const NextBtn = styled.button`
  cursor: pointer;
  border: 0.5px solid ${(props) => props.st.boxBorder};
  font-size: 14px;
  background-color: ${(props) => props.st.pageControllerBg};
  color: ${(props) => props.st.text};
  border-radius: 7px;
`;
const PageController = styled.div`
  display: flex;
  width: 100px;
  height: 20px;
  border-radius: 5px;
  background-color: ${(props) => props.st.pageControllerBg};
  color: ${(props) => props.st.text};
  margin-top: 10px;
`;
const Toggle = styled.div`
  border: 0.5px solid gray;
  color: ${(props) => props.st.text};
  width: 50px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  border-radius: 20px;
  cursor: pointer;
  margin-top: 40px;
  margin-bottom: 10px;
  margin-left: 30px;
`;
const PageSelector = styled.span`
  border: 0.5px solid grey;
  border-radius: 5px;
  width: 100%;
  text-align: center;
  text-decoration: none;
`;
const Disabled = styled.span`
  opacity: 0;
`;
export default NavBar;
