import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Todo from "../DateList/Todo";

const SideBar = () => {
  // const { yy, mm, dd } = useSelector((state) => state.reducers.date.newBucket);
  const { yy, mm, dd } = useSelector((state) => state.reducers.date.sideBar);

  const todos = useSelector((state) => state.reducers.todos.todos);
  console.log("sidebar", todos);
  return (
    <Wrapper>
      <Date>
        {yy}년 {mm}월 {dd}일
      </Date>
      <TodoList>
        {todos.filter((todo) => todo.id.split("-")[0] === `${yy}${mm}${dd}`)
          .length === 0 ? (
          <EmptyPage>
            할 일이 텅! 비었어요. <br />할 일을 추가해보세요.
            <AddTodo>+</AddTodo>
          </EmptyPage>
        ) : (
          <>
            {todos
              .filter((todo) => todo.id.split("-")[0] === `${yy}${mm}${dd}`)
              .map((item) => (
                <Todo key={item.id} item={item}></Todo>
              ))}
          </>
        )}
      </TodoList>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  background-color: #211d27;
  width: 300px;
`;
const Date = styled.h1`
  color: white;
  padding-left: 20px;
`;
const EmptyPage = styled.p`
  color: white;
  padding-left: 20px;
`;
const AddTodo = styled.button``;
const TodoList = styled.div``;

export default SideBar;
