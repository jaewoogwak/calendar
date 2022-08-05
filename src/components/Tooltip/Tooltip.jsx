import React, { useState } from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { editTodo } from "../../data/slices/todoSlice";
import useTooltip from "./hooks/useTooltip";

const Tooltip = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditting, setIsEditting] = useState(false);
  const { isOpened } = useTooltip();

  const [event, setEvent] = useState(todo.eventName);
  const [place, setPlace] = useState(todo.place);
  const [date, setDate] = useState(todo.date);
  const [time, setTime] = useState(todo.time);

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "event") setEvent(value);
    else if (name === "place") setPlace(value);
    else if (name === "date") setDate(value);
    else setTime(value);
  };

  const onHandleEditTodo = useCallback(() => {
    console.log("onHandleEditTodo", todo.id, event, place, date, time);
    dispatch(
      editTodo({
        id: todo.id,
        eventName: event,
        place: place,
        date: date,
        time: time,
      })
    );
  }, [dispatch, todo.id, event, place, date, time]);

  useEffect(() => {
    console.log("onHandleEditTodo");
    onHandleEditTodo();
  }, [isOpened, onHandleEditTodo]);
  return (
    <Container onMouseEnter={() => setIsEditting(true)}>
      {`${isEditting}`}
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
        <Date
          type="date"
          placeholder="날짜를 추가해보세요"
          name="date"
          value={date}
          onChange={onChange}
        ></Date>
        <Time
          type="time"
          placeholder="시간을 추가해보세요"
          name="time"
          value={time}
          onChange={onChange}
        ></Time>
      </>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  border-radius: 10px;
  padding: 10px;
  border: 0.5px solid gray;
  top: 25px;
  width: 180px;
  height: 100px;
  background-color: #312b39;
  z-index: 4;
  color: #fff;
`;

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
const Date = styled.input`
  background-color: #312b39;
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

export default Tooltip;
