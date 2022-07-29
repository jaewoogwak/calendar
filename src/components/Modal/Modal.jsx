import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../data/slices/todoSlice";

const Modal = ({
  className,
  onClose,
  maskClosable,
  closable,
  visible,
  setModalVisible,
  children,
  count,
}) => {
  const [event, setEvent] = useState("");
  const [place, setPlace] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState();
  const dispatch = useDispatch();
  const dateId = useSelector((state) => state.reducers.date.date);
  console.log("dateIDDDDD", dateId);

  const onChange = (e) => {
    const { name, value } = e.target;
    if (name === "event") {
      setEvent(value);
      console.log(name, value);
    } else if (name === "place") {
      setPlace(value);
      console.log(name, value);
    } else if (name === "date") {
      console.log(name, value);
      setDate(value);
    } else {
      console.log(name, value);
      setTime(value);
    }
  };
  const onClickModalBtn = (e) => {
    const { name } = e.target;
    if (name === "addEvent") {
      console.log(event, place, date, time);
      handleAddTodo();
      setModalVisible((prev) => !prev);
    } else {
      setModalVisible((prev) => !prev);
    }
    setEvent("");
    setPlace("");
    setDate("");
    setTime("");
  };
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const close = (e) => {
    if (onClose) {
      onClose(e);
    }
  };
  const handleAddTodo = () => {
    console.log("handleAddTodo", dateId);
    dispatch(
      addTodo({
        todo: {
          id: `${dateId}-${count.current++}`,
          eventName: event,
          place: place,
          date: date,
          time: time,
        },
        type: "addTodo",
      })
    );
  };
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper
        className={className}
        onClick={maskClosable ? onMaskClick : null}
        tabIndex="-1"
        visible={visible}
      >
        <ModalInner tabIndex="0" className="modal-inner">
          <EventInput
            type="text"
            name="event"
            onChange={onChange}
            placeholder="새로운 이벤트"
            value={event}
          />
          <EventPlaceInput
            type="text"
            name="place"
            onChange={onChange}
            placeholder="위치 추가"
            value={place}
          />
          <DateInput type="date" name="date" onChange={onChange} value={date} />
          <TimeInput type="time" name="time" onChange={onChange} value={time} />
          <EventBtnWrapper>
            <EventBtn name="addEvent" onClick={onClickModalBtn}>
              등록
            </EventBtn>
            <EventBtn name="cancel" onClick={onClickModalBtn}>
              취소
            </EventBtn>
          </EventBtnWrapper>
        </ModalInner>
      </ModalWrapper>
    </>
  );
};

Modal.propTypes = {
  visible: PropTypes.bool,
};
Modal.defaultProps = {
  closable: true,
  maskClosable: true,
  visible: false,
};
const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div``;
const EventInput = styled.input`
  height: 30px;
  font-size: 20px;
  border: 0px;
  padding-bottom: 5px;
`;
const EventPlaceInput = styled.input`
  height: 24px;
  font-size: 16px;
  border: 0px;
  border-top: 0.5px solid gray;
  padding: 5px 0px 5px 0px;
`;
const DateInput = styled.input`
  border: 0px;
  border-top: 0.5px solid gray;
  padding-top: 5px;
  padding-bottom: 5px;
`;
const TimeInput = styled.input`
  border: 0px;
  border-top: 0.5px solid gray;
  padding-top: 5px;
`;
const EventBtnWrapper = styled.div`
  align-self: flex-end;
`;
const EventBtn = styled.button`
  align-self: flex-end;
  margin-top: 20px;
  height: 28px;
  width: 50px;
  margin-left: 3px;
`;

export default Modal;
