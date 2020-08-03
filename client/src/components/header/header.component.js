import React, { useState, useEffect } from "react";
import { isExact } from "../../helpers/helpers";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

//  Helper Components
import { createStructuredSelector } from "reselect";
import { numOfItems } from "../../redux/user/user.selector";
import { asyncGetUserProfile } from "../../redux/user/user.action";

// Components
import "./header.style.scss";

const HeaderComponent = ({ location, numOfItems, asyncGetUserProfile }) => {
  const [isVisable, setVisable] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const token =
      localStorage.getItem("auth-token") ||
      sessionStorage.getItem("auth-token");

    asyncGetUserProfile(token);
    setCount(numOfItems);
  });

  return (
    <>
      {isVisable ? (
        <div className="header-backround-div">
          <div className="header-icons">
            <div className="header-count">
              <i className="fas fa-shopping-cart">
                <h6 className="count">
                  <Link to="/profile">{count}</Link>
                </h6>
              </i>
            </div>
            <div className="header-exit">
              <i
                className="far fa-times-circle"
                onClick={() => setVisable(false)}
              ></i>
            </div>
          </div>
          <div className="header-center-links">
            <div
              className={` ${
                isExact(location.pathname, "home")
                  ? "header-link_current"
                  : "header-link"
              }`}
            >
              <Link to="/home">Home</Link>
            </div>
            <div
              className={` ${
                isExact(location.pathname, "profile")
                  ? "header-link_current"
                  : "header-link"
              }`}
            >
              <Link to="/profile">Profile</Link>
            </div>
            <div
              className={` ${
                isExact(location.pathname, "add")
                  ? "header-link_current"
                  : "header-link"
              }`}
            >
              <Link to="/add">Add Item</Link>
            </div>
            <div
              className={` ${
                isExact(location.pathname, "back")
                  ? "header-link_current"
                  : "header-link"
              }`}
            >
              <Link to="/">Back</Link>
            </div>
            <div
              className={` ${
                isExact(location.pathname, "settings")
                  ? "header-link_current"
                  : "header-link"
              }`}
            >
              <Link to="/settings">Settings</Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="header-closed-bg change">
          <h1 className="header-name">MKTrader</h1>
          <div
            className="header-open "
            onClick={() => setVisable(true)}
          >
            <i className="fas fa-bars"></i>
          </div>
        </div>
      )}
    </>
  );
};
const mapDispatchToProps = (dispatch) => ({
  asyncGetUserProfile: (token) => dispatch(asyncGetUserProfile(token)),
});
const mapStateToProps = createStructuredSelector({
  numOfItems,
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)
);
