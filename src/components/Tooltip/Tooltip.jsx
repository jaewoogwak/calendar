import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Form from "./Form";

const Tooltip = ({ todo, getBoxPos, isInSidebar }) => {
  const { offsetLeft } = getBoxPos();
  const { style } = useSelector((state) => state.reducers.view);
  return (
    <Container
      style={style}
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
  border: 0.5px solid ${(props) => props.style.boxBorder};
  left: ${(props) => (props.isReflect ? null : "130px")};
  right: ${(props) => (props.isReflect ? "130px" : null)};
  right: ${(props) => (props.isInSidebar ? "290px" : null)};
  width: 255px;
  height: 120px;

  background-color: #312b39;

  background-color: ${(props) => props.style.background};

  z-index: 4;
  color: ${(props) => props.style.text};
`;

export default Tooltip;
