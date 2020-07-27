import React from "react";
//  Components
import "./checkbox.style.scss";

const CheckboxComponent = ({ name, value, handleChange, children }) => {
  return (
    <label className="container change" htmlFor={name}>
      {children}
      <input
        id={name}
        name={name}
        type="checkbox"
        onChange={handleChange}
        value={value}
        defaultChecked={value}
      />
      <span className="checkmark"></span>
    </label>
  
  );
};

export default CheckboxComponent;
