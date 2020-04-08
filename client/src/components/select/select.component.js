import React from 'react';
import './select.style.scss';

const SelectComponent = ({ handleChange, name, value, options, message }) => {
  return (
    <div className="select-component-container">
      <label>Select {message}</label>
      <select
        className="select-component"
        onChange={handleChange}
        value={value}
        name={name}
      >
        <option className="select-component-option" disabled value="">
          Select {message} type
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
