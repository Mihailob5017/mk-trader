import React from 'react';
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
// <div className="radio-btns-container">
//   <div className="radio-container">
//     <input type="radio" id="test1" name="radio-group" checked />
//     <label for="test1">Ascending</label>
//   </div>
//   <div className="radio-container">
//     <input type="radio" id="test2" name="radio-group" />
//     <label for="test2">Descending</label>
//   </div>
export default RadioComponent;
