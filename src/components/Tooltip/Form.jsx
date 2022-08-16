import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { editTodo } from "../../data/slices/todoSlice";

export default function Form({ todo }) {
  const [event, setEvent] = useState(todo.eventName);
  const [place, setPlace] = useState(todo.place);
  const [startDate, setStartDate] = useState(todo.startDate);
  const [endDate, setEndDate] = useState(todo.endDate);
  const [startTime, setStartTime] = useState(todo.startTime);
  const [endTime, setEndTime] = useState(todo.endTime);
  const dispatch = useDispatch();
  const { style } = useSelector((state) => state.reducers.view);

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "event") setEvent(value);
    else if (name === "place") setPlace(value);
    else if (name === "startDate") setStartDate(value);
    else if (name === "startTime") setStartTime(value);
    else if (name === "endDate") setEndDate(value);
    else setEndTime(value);
  };

  const onHandleEditTodo = useCallback(() => {
    dispatch(
      editTodo({
        id: todo.id,
        eventName: event,
        place: place,
        startDate: startDate,
        startTime: startTime,
        endDate: endDate,
        endTime: endTime,
      })
    );
  }, [dispatch, todo.id, event, place, startDate, startTime, endDate, endTime]);

  useEffect(() => {
    onHandleEditTodo();
  }, [onHandleEditTodo]);
  return (
    <Wrapper style={style}>
      <EventName
        style={style}
        placeholder="일정을 추가헤보세요"
        name="event"
        value={event}
        onChange={onChange}
      ></EventName>
      <Place
        style={style}
        placeholder="장소를 추가해보세요"
        name="place"
        value={place}
        onChange={onChange}
      ></Place>
      <Line></Line>
      <Start>
        시작:
        <Date
          style={style}
          type="date"
          placeholder="날짜를 추가해보세요"
          name="startDate"
          value={startDate}
          onChange={onChange}
        ></Date>
        <Time
          style={style}
          type="time"
          placeholder="시간을 추가해보세요"
          name="startTime"
          value={startTime}
          onChange={onChange}
        ></Time>
      </Start>
      <End>
        종료:
        <Date
          style={style}
          type="date"
          placeholder="날짜를 추가해보세요"
          name="endDate"
          value={endDate}
          onChange={onChange}
        ></Date>
        <Time
          style={style}
          type="time"
          placeholder="시간을 추가해보세요"
          name="endTime"
          value={endTime}
          onChange={onChange}
        ></Time>
      </End>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  background-color: ${(props) => props.style.background};
  color: ${(props) => props.style.text};
`;
const EventName = styled.input`
  background-color: ${(props) => props.style.background};
  color: ${(props) => props.style.text};
  width: 160px;
  height: 18px;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 5px;
  border: none;
`;
const Place = styled.input`
  color: ${(props) => props.style.text};

  font-size: 12px;
  font-weight: 400;
  border-bottom: 0.5px solid gray;
  border: none;
`;

const Line = styled.hr`
  height: 0.1px;
`;
const Start = styled.div`
  font-size: 12px;
  padding-bottom: 3px;
`;
const End = styled.div`
  font-size: 12px;
`;
const Date = styled.input`
  color: ${(props) => props.style.text};

  padding-left: 5px;
  font-size: 12px;
  font-weight: 400;
  border-bottom: 0.5px solid gray;
  border: none;
`;
const Time = styled.input`
  color: ${(props) => props.style.text};

  font-size: 12px;
  font-weight: 400;
  border-bottom: 0.5px solid gray;
  border: none;
`;
