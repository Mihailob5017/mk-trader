import React from 'react';
import './checkbox.style.scss';
const CheckboxComponent = ({ name, value, handleChange, children }) => {
  return (
    <div className="checkbox-container">
      <input
        id="c1"
        name={name}
        value={value}
        onChange={handleChange}
        type="checkbox"
      />
      <label className="checkbox-label" htmlFor="c1">
        {children}
      </label>
    </div>
  );
};

export default CheckboxComponent;
