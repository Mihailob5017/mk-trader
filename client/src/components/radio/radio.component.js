import React from "react";

//  Components
import "./radio.style.scss";

const RadioComponent = ({ value, handleChange, values, message }) => {
  return (
    <div className="radio-btns-container">
      <h3 className="change">{message}</h3>
      <div className="radio-btns-main">
        {values.map((singleValue, i) => (
          <label className="container" key={i} htmlFor={singleValue.value}>
            {singleValue.name}
            <input
              type="radio"
              id={singleValue.value}
              onChange={handleChange}
              name="radio-group"
              value={singleValue.value}
              checked={singleValue.value === value ? true : false}
            />
            <span className="checkmark"></span>
          </label>
        ))}
      </div>
    </div>
  );
};
// <div className="radio-btns-container">
//   {values.map((singleValue, i) => (
//     <div key={i} className="radio-container">
//       <input
//         id={singleValue.value}
//         type="radio"
//         value={singleValue.value}
//         name="radio-group"
//         onChange={handleChange}
//         checked={singleValue.value === value ? true : false}
//       />
//       <label htmlFor={singleValue.value}>{singleValue.name}</label>
//     </div>
//   ))}
// </div>

export default RadioComponent;
