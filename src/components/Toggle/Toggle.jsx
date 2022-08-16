import React from "react";
import { useDispatch } from "react-redux";
import "../../assets/toggle.css";
import { onToggle } from "../../data/slices/viewSlice";
const Toggle = () => {
  const dispatch = useDispatch();
  const onClickToggle = (mode) => {
    dispatch(onToggle());
  };
  return (
    <div onClick={onClickToggle}>
      <label>
        <input class="toggle-checkbox" type="checkbox"></input>
        <div class="toggle-slot">
          <div class="sun-icon-wrapper">
            <div
              class="iconify sun-icon"
              data-icon="feather-sun"
              data-inline="false"
            ></div>
          </div>
          <div class="toggle-button"></div>
          <div class="moon-icon-wrapper">
            <div
              class="iconify moon-icon"
              data-icon="feather-moon"
              data-inline="false"
            ></div>
          </div>
        </div>
      </label>
    </div>
  );
};

export default Toggle;
