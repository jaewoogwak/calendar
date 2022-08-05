import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../../data/slices/todoSlice";
import Box from "./Box";
import { createView } from "./modules/dateArray";

export const DateList = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.reducers.todos.count);

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
  const { yy, mm } = useSelector((state) => state.reducers.date.newBucket);
  const arr = createView(yy, mm);
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
          count={count}
          onHandleClickDateCell={onHandleClickDateCell}
        ></Box>
      ))}
    </BoxListWrpper>
  );
};
const BoxListWrpper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;
export default DateList;
