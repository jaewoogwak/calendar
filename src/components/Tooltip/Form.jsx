import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
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
    <>
      <EventName
        placeholder="일정을 추가헤보세요"
        name="event"
        value={event}
        onChange={onChange}
      ></EventName>
      <Place
        placeholder="장소를 추가해보세요"
        name="place"
        value={place}
        onChange={onChange}
      ></Place>
      <Line></Line>
      <Start>
        시작:
        <Date
          type="date"
          placeholder="날짜를 추가해보세요"
          name="startDate"
          value={startDate}
          onChange={onChange}
        ></Date>
        <Time
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
          type="date"
          placeholder="날짜를 추가해보세요"
          name="endDate"
          value={endDate}
          onChange={onChange}
        ></Date>
        <Time
          type="time"
          placeholder="시간을 추가해보세요"
          name="endTime"
          value={endTime}
          onChange={onChange}
        ></Time>
      </End>
    </>
  );
}

const EventName = styled.input`
  background-color: #312b39;
  color: white;
  width: 160px;
  height: 18px;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 5px;
  border: none;
`;
const Place = styled.input`
  background-color: #312b39;
  color: white;
  font-size: 12px;
  font-weight: 400;
  border-bottom: 0.5px solid gray;
  border: none;
`;

const Line = styled.hr`
  height: 0.1px;
`;
const Start = styled.div`
  padding-bottom: 3px;
`;
const End = styled.div``;
const Date = styled.input`
  background-color: #312b39;
  padding-left: 5px;
  color: white;
  font-size: 12px;
  font-weight: 400;
  border-bottom: 0.5px solid gray;
  border: none;
`;
const Time = styled.input`
  background-color: #312b39;
  color: white;
  font-size: 12px;
  font-weight: 400;
  border-bottom: 0.5px solid gray;
  border: none;
`;
