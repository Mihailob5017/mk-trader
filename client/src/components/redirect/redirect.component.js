import React from 'react';
import './redirect.style.scss';

const Redirect = ({ handleClick, children }) => {
  return (
    <div className="redirect-container">
      <h2 className="redirect-text">{children}</h2>
      <button className="redirect-btn" onClick={handleClick}>
        Sign In/Sign Up
      </button>
    </div>
  );
};

export default Redirect;
