import React from "react";
//  Components
import "./input.style.scss";
const InputComponent = ({
  name,
  label,
  value,
  handleChange,
  ...otherProps
}) => {
  return (
    <div className="input-container change">
      <label className="input-label change" htmlFor={name}>
        {label}
      </label>
      <input
        className="input-input-field change"
        name={name}
        value={value}
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
};

export default InputComponent;
