import React from "react";
import { Link } from "react-router-dom";

//  Components
import ButtonComponent from "../button/button.somponent";
import "./reject.style.scss";
const RejectComponent = () => {
  return (
    <div className="reject-container ">
      <div className="reject-body change-bg">
        <div>
          <h1 className="change">You do not have access to this page</h1>
          <h3 className="change">
            However,you can and enable the user to sell clothes in the settings
            menu
          </h3>
        </div>
        <ButtonComponent fullWidth={true}>
          <Link to="/settings">Go To Settings</Link>
        </ButtonComponent>
      </div>
    </div>
  );
};

export default RejectComponent;
