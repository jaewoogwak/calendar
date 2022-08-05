import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setDate } from "../../data/slices/dateSlice";
import { setModalVisible } from "../../data/slices/modalSlice";
import Todo from "../DateList/Todo";

const SideBar = () => {
  // const { yy, mm, dd } = useSelector((state) => state.reducers.date.newBucket);
  const { yy, mm, dd } = useSelector((state) => state.reducers.date.sideBar);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.reducers.todos.todos);
  console.log("sidebar", todos);
  const clickedDate = `${yy}${mm}${dd}`;

  const addTodo = () => {
    dispatch(setModalVisible(true));
    dispatch(setDate({ date: clickedDate }));
  };

  return (
    <Wrapper>
      <Date>
        {yy}년 {mm}월 {dd}일
      </Date>
      <TodoList>
        {todos.filter((todo) => todo.id.split("-")[0] === `${yy}${mm}${dd}`)
          .length === 0 ? (
          <EmptyPage>
            <Text>
              할 일이 텅! 비었어요. <br />할 일을 추가해보세요.
            </Text>
            <AddTodo onClick={addTodo}>할 일 추가하기</AddTodo>
          </EmptyPage>
        ) : (
          <ItemList>
            {todos
              .filter((todo) => todo.id.split("-")[0] === `${yy}${mm}${dd}`)
              .map((item) => (
                <Item key={item.id}>
                  <Todo key={item.id} item={item}></Todo>
                </Item>
              ))}
          </ItemList>
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
const EmptyPage = styled.div`
  text-align: center;
`;
const Text = styled.p`
  padding-top: 120px;
  color: white;
`;
const AddTodo = styled.button`
  width: 100px;
`;
const TodoList = styled.div`
  position: relative;
`;

const ItemList = styled.ul`
  background-color: ${(props) => (props.isClicked ? "skyblue" : "")};
`;

const Item = styled.li`
  color: white;
`;

export default SideBar;
