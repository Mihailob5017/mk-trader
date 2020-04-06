import React from 'react';
import './button.style.scss';
const ButtonComponent = ({ children, actionHandler }) => {
  return (
    <div className="button-container">
      <button className="button-main" onClick={actionHandler}>
        {children}
      </button>
    </div>
  );
};

export default ButtonComponent;
