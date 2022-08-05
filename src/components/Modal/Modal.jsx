import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../data/slices/todoSlice";
import { setModalVisible } from "../../data/slices/modalSlice";

const Modal = ({ className, maskClosable, closable, children, count }) => {
  const dispatch = useDispatch();
  const dateId = useSelector((state) => state.reducers.date.date);
  const visible = useSelector((state) => state.reducers.modal.modalVisible);
  console.log("dateIDDDDD", dateId);

  const eventRef = useRef();
  const placeRef = useRef();
  const dateRef = useRef();
  const timeRef = useRef();

  const onClickModalBtn = (e) => {
    const { name } = e.target;
    if (name === "addEvent") {
      handleAddTodo();
      if (visible) dispatch(setModalVisible(false));
      else dispatch(setModalVisible(true));
    } else {
      if (visible) dispatch(setModalVisible(false));
      else dispatch(setModalVisible(true));
    }
  };

  const closeModal = () => {
    dispatch(setModalVisible(false));
  };

  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal(e);
    }
  };

  // const close = (e) => {
  //   if (onClose) {
  //     onClose(e);
  //   }
  // };
  const handleAddTodo = () => {
    console.log("handleAddTodo", dateId);
    dispatch(
      addTodo({
        todo: {
          id: `${dateId}-${count.current++}`,
          eventName: eventRef.current.value,
          place: placeRef.current.value,
          date: dateRef.current.value,
          time: timeRef.current.value,
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
            placeholder="새로운 이벤트"
            ref={eventRef}
          />
          <EventPlaceInput
            type="text"
            name="place"
            placeholder="위치 추가"
            ref={placeRef}
          />
          <DateInput type="date" name="date" ref={dateRef} />
          <TimeInput type="time" name="time" ref={timeRef} />
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
