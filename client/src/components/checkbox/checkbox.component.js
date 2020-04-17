import React from 'react';
import './checkbox.style.scss';
const CheckboxComponent = ({ name, value, handleChange, children }) => {
  return (
    <div className="checkbox-container">
      <input
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        type="checkbox"
      />
      <label className="checkbox-label" htmlFor={name}>
        {children}
      </label>
    </div>
  );
};

export default CheckboxComponent;