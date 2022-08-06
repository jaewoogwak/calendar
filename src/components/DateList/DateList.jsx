import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../../data/slices/todoSlice";
import Box from "./Box";
import { createView } from "./modules/dateArray";

export default function DateList() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.reducers.todos.count);
  const { year, month } = useSelector((state) => state.reducers.date.bucket);
  const arr = createView(year, month);

  const onHandleClickDateCell = (dateId) => {
    dispatch(
      addTodo({
        todo: {
          id: `${dateId}-${count}`,
          eventName: "새로운 이벤트",
          place: "",
          date: "",
          time: "",
        },
        type: "addTodo",
      })
    );
  };
  return (
    <BoxListWrpper>
      {arr.map((item) => (
        <Box
          key={`${item.year}${item.month}${item.date}${item.day}`}
          id={`${item.year}${item.month}${item.date}`}
          itemYear={item.year}
          itemMonth={item.month}
          itemDate={item.date}
          itemDay={item.day}
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
