import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar/NavBar";
import SideBar from "./SideBar/SideBar";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <NavBar />
      <MainView>
        <div>{children}</div>
        <SideBar />
      </MainView>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 1185px;
  margin: 0 auto;
`;
const MainView = styled.div`
  display: flex;
  width: 1185px;
`;
export default Layout;
