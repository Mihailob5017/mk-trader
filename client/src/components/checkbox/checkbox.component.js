import React from "react";
//  Components
import "./checkbox.style.scss";

const CheckboxComponent = ({ name, value, handleChange, children }) => {
  return (
    <div className="checkbox-container">
      <input
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        type="checkbox"
        defaultChecked={value}
      />
      <label className="checkbox-label change" htmlFor={name}>
        {children}
      </label>
    </div>
  );
};

export default CheckboxComponent;
