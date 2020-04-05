import React from 'react';

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
        
        name={name}
        value={value}
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
};

export default InputComponent;
