import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setDate } from "../../data/slices/dateSlice";
import { setModalVisible } from "../../data/slices/modalSlice";
import { addTodo, deleteTodo } from "../../data/slices/todoSlice";
import Todo from "../DateList/Todo";

const SideBar = () => {
  const { yy, mm, dd } = useSelector((state) => state.reducers.date.sideBar);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.reducers.todos.todos);
  console.log("sidebar", todos);
  const clickedDate = `${yy}${mm}${dd}`;
  const count = useSelector((state) => state.reducers.todos.count);
  const onHandleaddTodo = () => {
    dispatch(setDate({ date: clickedDate }));
    dispatch(
      addTodo({
        todo: {
          id: `${clickedDate}-${count}`,
          eventName: "새로운 이벤트",
          place: "",
          date: "",
          time: "",
        },
        type: "addTodo",
      })
    );
  };
  const onHandleDeleteTodo = (id) => {
    console.log("onHandleDeleteTodo", id);
    dispatch(deleteTodo({ id: id }));
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
            <AddTodo onClick={onHandleaddTodo}>할 일 추가하기</AddTodo>
          </EmptyPage>
        ) : (
          <ItemList>
            {todos
              .filter((todo) => todo.id.split("-")[0] === `${yy}${mm}${dd}`)
              .map((item) => (
                <Item key={item.id}>
                  <ItemWrapper>
                    <Todo key={item.id} item={item}></Todo>
                    <DeleteBtn onClick={() => onHandleDeleteTodo(item.id)}>
                      X
                    </DeleteBtn>
                  </ItemWrapper>
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
const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
const Item = styled.li`
  color: white;
`;
const DeleteBtn = styled.button``;

export default SideBar;
