import React from 'react';

//  Components
import './radio.style.scss';

const RadioComponent = ({  value, handleChange, values }) => {
  return (
    <div className="radio-btns-container">
      {values.map((singleValue, i) => (
        <div key={i} className="radio-container">
          <input
            id={singleValue.value}
            type="radio"
            value={singleValue.value}
            name="radio-group"
            onChange={handleChange}
            checked={singleValue.value === value ? true : false}
          />
          <label htmlFor={singleValue.value}>{singleValue.name}</label>
        </div>
      ))}
    </div>
  );
};
export default RadioComponent;
