import React from "react";

//  Components
import "./select.style.scss";

const SelectComponent = ({
  handleChange,
  name,
  value,
  options,
  message,
  placeholder,
}) => {
  return (
    <div className="select-component-container">
      <label className="change">{message}:</label>
      <select
        className="select-component"
        onChange={handleChange}
        value={value}
        name={name}
      >
        <option className="select-component-option" disabled value="">
          {placeholder}
        </option>
        {options.map((option, i) => (
          <option
            key={i}
            className="select-component-option"
            value={option.value}
          >
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;
