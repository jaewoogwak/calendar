import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setDate } from "../../data/slices/dateSlice";
import { addTodo, deleteTodo } from "../../data/slices/todoSlice";
import Todo from "../DateList/Todo";

const SideBar = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.reducers.todos.todos);
  const count = useSelector((state) => state.reducers.todos.count);
  const { year, month, date } = useSelector(
    (state) => state.reducers.date.sideBar
  );

  const clickedDate = `${year}${month}${date}`;
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
        {year}년 {month}월 {date}일
      </Date>
      <TodoList>
        {todos.filter(
          (todo) => todo.id.split("-")[0] === `${year}${month}${date}`
        ).length === 0 ? (
          <EmptyPage>
            <Text>
              할 일이 텅! 비었어요. <br />할 일을 추가해보세요.
            </Text>
            <AddTodo onClick={onHandleaddTodo}>할 일 추가하기</AddTodo>
          </EmptyPage>
        ) : (
          <ItemList>
            {todos
              .filter(
                (todo) => todo.id.split("-")[0] === `${year}${month}${date}`
              )
              .map((item) => (
                <Item key={item.id}>
                  <ItemWrapper>
                    <Todo key={item.id} item={item} isInSidebar={true}></Todo>
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
  cursor: pointer;
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
const DeleteBtn = styled.button`
  cursor: pointer;
`;

export default SideBar;
