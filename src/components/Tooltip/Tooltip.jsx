import React from "react";
import styled from "styled-components";

const Tooltip = () => {
  return <Container>HELLO</Container>;
};

const Container = styled.div`
  position: absolute;
  top: 25px;
  width: 220px;
  height: 170px;
  background-color: #000;
  z-index: 1;
  color: #fff;
`;

export default Tooltip;
