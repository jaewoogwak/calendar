import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { nextMonth, prevMonth, setBucket } from "../../features/date/dateSlice";
import { createNextPage, createPreviousPage } from "./useNavbar";

const NavBar = ({ onClickTodayBtn }) => {
  const dispatch = useDispatch();
  const { year, month } = useSelector((state) => state.reducers.date.page);

  const prevPage = () => {
    const arr = createPreviousPage(year, month);
    console.log("arrrr", arr);
    dispatch(setBucket({ bucket: arr }));
    dispatch(prevMonth());
  };
  const nextPage = () => {
    const arr = createNextPage(year, month);
    console.log("arrrr", arr);
    dispatch(setBucket({ bucket: arr }));
    dispatch(nextMonth());
  };
  return (
    <NavBarWrapper>
      <YearAndMonth>
        {year}년 {month}월
      </YearAndMonth>
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
