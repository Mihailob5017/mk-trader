import React, { useState } from 'react';
import { isExact } from '../../helpers/helpers';
import { Link, withRouter } from 'react-router-dom';
import './header.style.scss';
const HeaderComponent = ({ location }) => {
  const [isVisable, setVisable] = useState(false);
  console.log(isExact(location.pathname, 'home'));
  return (
    <>
      {isVisable ? (
        <div className="header-backround-div">
          <div className="header-exit">
            <i
              className="far fa-times-circle"
              onClick={() => setVisable(false)}
            ></i>
          </div>
          <div className="header-center-links">
            <div
              className={` ${
                isExact(location.pathname, 'home')
                  ? 'header-link_current'
                  : 'header-link'
              }`}
            >
              <Link to="/home">Home</Link>
            </div>
            <div
              className={` ${
                isExact(location.pathname, 'profile')
                  ? 'header-link_current'
                  : 'header-link'
              }`}
            >
              <Link to="/profile">Profile</Link>
            </div>
            <div
              className={` ${
                isExact(location.pathname, 'add')
                  ? 'header-link_current'
                  : 'header-link'
              }`}
            >
              <Link to="/add">Add Item</Link>
            </div>
            <div
              className={` ${
                isExact(location.pathname, 'back')
                  ? 'header-link_current'
                  : 'header-link'
              }`}
            >
              <Link to="/">Back</Link>
            </div>
            <div
              className={` ${
                isExact(location.pathname, 'settings')
                  ? 'header-link_current'
                  : 'header-link'
              }`}
            >
              <Link to="/settings">Settings</Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="header-closed-bg">
          <h1 className="header-name">MKTrader</h1>
          <div className="header-open">
            <i
              className="fas fa-ellipsis-v"
              onClick={() => setVisable(true)}
            ></i>
          </div>
        </div>
      )}
    </>
  );
};

export default withRouter(HeaderComponent);
