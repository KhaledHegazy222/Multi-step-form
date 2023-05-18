import React from "react";
import style from "./InputField.module.css";
const ToggleSwitch = ({ onToggle, open }) => {
  return (
    <button
      className={
        style.toggleSwitchOuter +
        " " +
        (open ? style.openButton : style.closeButton)
      }
      onClick={onToggle}
    >
      <div></div>
    </button>
  );
};

export default ToggleSwitch;
