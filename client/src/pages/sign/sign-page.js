import React from 'react';
import './sign-page.style.scss';
//  Components
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
const Sign = () => {
  return (
    <div className="sign-page-container">
      <h1 className="sign-page-header">Sign In or Sign Up</h1>
      <div className="sign-page-body">
        <SignIn />
        <SignUp />
      </div>
    </div>
  );
};

export default Sign;
