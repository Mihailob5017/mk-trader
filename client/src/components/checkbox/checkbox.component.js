import React from "react";
//  Components
import "./checkbox.style.scss";

const CheckboxComponent = ({ name, value, handleChange, children }) => {
  return (
    <label className="container" htmlFor={name}>
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
    //  <div className="checkbox-container">
    /* <input
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        type="checkbox"
        defaultChecked={value}
      />
      <label className="checkbox-label change" htmlFor={name}>
        {children}
      </label> */
  );
};

export default CheckboxComponent;
