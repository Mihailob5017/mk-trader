import React from 'react';
import { Link } from 'react-router-dom';
import ButtonComponent from '../button/button.somponent';
import './reject.style.scss';
const RejectComponent = () => {
  return (
    <div className="reject-container">
      <div className="reject-body">
        <h1>You do not have access to this page</h1>
        <h3>
          However, you can change the access and enable the user to add new
          items
        </h3>
        <ButtonComponent fullWidth={true}>
          <Link to="/settings">Go To Settings</Link>
        </ButtonComponent>
      </div>
    </div>
  );
};

export default RejectComponent;
