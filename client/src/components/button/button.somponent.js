import React from 'react';
import './button.style.scss';
const ButtonComponent = ({ children, actionHandler, fullWidth }) => {
  return (
    <div className="button-container">
      <button
        className={`button-main ${fullWidth && 'button-main_fullwidth'}`}
        onClick={actionHandler}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonComponent;
