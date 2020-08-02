import React from "react";

//  Components
import "./button.style.scss";
const ButtonComponent = ({ children, actionHandler, fullWidth, disabled }) => {
  return (
    <div className={`button-container `}>
      <button
        disabled={disabled}
        className={`button-main change change-border ${fullWidth && "button-main_fullwidth"} ${
           disabled &&
           "disabled-btn"
        }`}
        onClick={actionHandler}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonComponent;
