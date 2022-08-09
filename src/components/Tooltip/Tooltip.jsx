import React, { useState } from "react";
import styled from "styled-components";
import Form from "./Form";

const Tooltip = ({ todo, getBoxPos, isInSidebar }) => {
  const { offsetLeft } = getBoxPos();
  return (
    <Container
      isReflect={offsetLeft >= 687 ? true : false}
      isInSidebar={isInSidebar}
    >
      <Form todo={todo} />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  border-radius: 10px;
  padding: 10px;
  border: 0.5px solid gray;
  left: ${(props) => (props.isReflect ? null : "130px")};
  right: ${(props) => (props.isReflect ? "130px" : null)};
  right: ${(props) => (props.isInSidebar ? "290px" : null)};
  width: 255px;
  height: 120px;
  background-color: #312b39;
  z-index: 4;
  color: #fff;
`;

export default Tooltip;
