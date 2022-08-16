import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addTodo, deleteTodo } from "../../data/slices/todoSlice";
import Todo from "../DateList/Todo";
import { getDateFormat } from "../DateList/utils/dateArray";
import useTooltip from "../Tooltip/hooks/useTooltip";

const SideBar = () => {
  const todos = useSelector((state) => state.reducers.todos.todos);
  const count = useSelector((state) => state.reducers.todos.count);
  const { style } = useSelector((state) => state.reducers.view);
  const { year, month, date } = useSelector(
    (state) => state.reducers.date.sideBar
  );
  const clickedDate = `${year}${month}${date}`;
  const { handleEnter } = useTooltip();
  const dispatch = useDispatch();

  const onHandleAddTodo = () => {
    dispatch(
      addTodo({
        todo: {
          date: getDateFormat(clickedDate),
          id: `${clickedDate}-${count}`,
          eventName: "새로운 이벤트",
          place: "",
          startDate: "",
          startTime: "",
          endDate: "",
          endTime: "",
        },
        type: "addTodo",
      })
    );
    handleEnter();
  };
  const onHandleDeleteTodo = (id) => {
    dispatch(deleteTodo({ id: id }));
  };
  return (
    <Wrapper st={style}>
      <Date st={style}>
        {year}년 {month}월 {date}일
      </Date>
      <TodoList>
        {todos.filter(
          (todo) => todo.id.split("-")[0] === `${year}${month}${date}`
        ).length === 0 ? (
          <EmptyPage>
            <Text st={style}>텅!</Text>
            <AddTodo st={style} onClick={onHandleAddTodo}>
              할 일 추가하기
            </AddTodo>
          </EmptyPage>
        ) : (
          <ItemList st={style}>
            {todos
              .filter(
                (todo) => todo.id.split("-")[0] === `${year}${month}${date}`
              )
              .map((item) => (
                <Item st={style} key={item.id}>
                  <ItemWrapper st={style}>
                    <Todo key={item.id} item={item} isInSidebar={true}></Todo>
                    <DeleteBtn
                      st={style}
                      onClick={() => onHandleDeleteTodo(item.id)}
                    >
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
  background-color: ${(props) => props.st.background};
  width: 300px;
`;
const Date = styled.h1`
  color: ${(props) => props.st.text};
  padding-left: 35px;
`;
const EmptyPage = styled.div`
  text-align: center;
`;
const Text = styled.h1`
  padding-top: 60px;
  font-size: 80px;
  color: ${(props) => props.st.text};
`;
const AddTodo = styled.div`
  font-size: 20px;
  align-self: center;
  width: 200px;
  height: 35px;
  background-color: ${(props) => props.st.background};
  border: ${(props) => props.st.boxBorder};
  border-radius: 30px;
  color: ${(props) => props.st.text};
  cursor: pointer;
  align-items: center;
  margin: 0 auto;
  line-height: 35px;
  font-weight: 800;
  :hover {
    background-color: #7a67a2;
  }
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
  color: ${(props) => props.st.text};
  padding-bottom: 10px;
`;
const DeleteBtn = styled.button`
  color: ${(props) => props.st.sideBarDelBtn};
  width: 20px;
  height: 20px;
  background-color: red;
  color: ${(props) => props.st.background};
  border-radius: 50%;
  border: solid 0.5px red;
  cursor: pointer;
`;

export default SideBar;
