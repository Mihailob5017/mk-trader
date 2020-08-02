import React from 'react';

//  Components
import './redirect.style.scss';
const Redirect = ({ handleClick, children }) => {
  return (
    <div className="redirect-container ">
      <div className="redirect-main">
        <h1 className="redirect-text change">{children}</h1>
        <button className="redirect-btn" onClick={handleClick}>
          Click here to Sign In/Sign Up
        </button>
      </div>
    </div>
  );
};

export default Redirect;
