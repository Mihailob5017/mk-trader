import React from 'react';
//  Components
import './input.style.scss'
const InputComponent = ({
  name,
  label,
  value,
  handleChange,
  ...otherProps
}) => {
  return (
    <div className="input-container">
      <label className='input-label' htmlFor={name}>{label}</label>
      <input 
        className='input-input-field'
        name={name}
        value={value}
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
};

export default InputComponent;
