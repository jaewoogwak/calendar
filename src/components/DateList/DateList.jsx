import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../../data/slices/todoSlice";
import Box from "./Box";
import { createView, getDateFormat } from "./utils/dateArray";

export default function DateList() {
  const count = useSelector((state) => state.reducers.todos.count);
  const { year, month } = useSelector((state) => state.reducers.date.bucket);
  const arr = createView(year, month);
  const dispatch = useDispatch();

  const onHandleClickDateCell = useCallback(
    (dateId) => {
      dispatch(
        addTodo({
          todo: {
            date: getDateFormat(dateId),
            id: `${dateId}-${count}`,
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
    },
    [dispatch, count]
  );
  return (
    <BoxListWrpper>
      {arr.map((item) => (
        <Box
          key={`${item.year}${item.month}${item.date}${item.day}`}
          id={`${item.year}${item.month}${item.date}`}
          item={item}
          onHandleClickDateCell={onHandleClickDateCell}
        ></Box>
      ))}
    </BoxListWrpper>
  );
}
const BoxListWrpper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
