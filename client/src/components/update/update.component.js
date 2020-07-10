import React, { useState, Children } from "react";

//  Helper Components

//  Components
import "./update.style.scss";
import BUttonComponent from "../../components/button/button.somponent";
//  Helpers
const Axios = require("axios").default;

const UpdateComponent = ({
  value,
  label,
  name,
  children,
  token,
  isCustom,

  ...other
}) => {
  const [newValue, setValue] = useState(value);
  const updateData = () => {
    Axios.put(
      "http://localhost:5000/user/edit",
      {
        paramName: name,
        paramValue: isCustom ? value : newValue,
      },
      {
        headers: { ["auth-token"]: token },
      }
    );
  };
  return (
    <div className="update-component-container">
      <div className="input">
        <label htmlFor={name}>{label}</label>
        {isCustom ? (
          <div>{children}</div>
        ) : (
          <input
            type="text"
            name={name}
            {...other}
            value={newValue}
            onChange={(e) => setValue(e.target.value)}
          />
        )}
      </div>
      <div className="btn">
        <BUttonComponent fullWidth={true} actionHandler={updateData}>
          Update
        </BUttonComponent>
      </div>
    </div>
  );
};

export default UpdateComponent;
