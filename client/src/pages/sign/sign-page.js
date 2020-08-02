import React, { useState, useEffect } from "react";

//  Components
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./sign-page.style.scss";
import { getTheme, setTheme } from "../../helpers/helpers";
const Sign = () => {
  const [signIn, setSignIn] = useState("");
  useEffect(() => {
    setTheme(getTheme());
  });

  return (
    <div className="sign-page-container">
      {signIn === "" ? (
        <div className="sign-page-header">
          <div className="sign-page-btns change">
            <button className="sign-btn" onClick={() => setSignIn(true)}>
              Sign In
            </button>
            <button className="sign-btn" onClick={() => setSignIn(false)}>
              Sign Up
            </button>
          </div>
        </div>
      ) : (
        <div className="sign-page-header">
          {signIn === true ? (
            <>
              <h2 className="sign-page-headtext change">Sign In</h2>
              <div className="sign-page-btn">
                <button className="sign-btn" onClick={() => setSignIn(!signIn)}>
                  Sign Up
                </button>
              </div>
            </>
          ) : (
            <>
              <h2 className="sign-page-headtext change">Sign Up</h2>
              <div className="sign-page-btn">
                <button className="sign-btn" onClick={() => setSignIn(!signIn)}>
                  Sign In
                </button>
              </div>
            </>
          )}
        </div>
      )}
      <div className="sign-page-body">
        {signIn === "" ? <></> : signIn === true ? <SignIn /> : <SignUp />}
      </div>
    </div>
  );
};

export default Sign;
