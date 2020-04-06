import React from 'react';
import { Link } from 'react-router-dom';
import './page-overview.style.scss';
const PageOverview = ({ children, to, isBtn, action }) => {
  return (
    <div className="page-overview-container">
      <h2 className="page-overview-text">
        {isBtn !== true ? (
          <Link className="page-overview-link" to={to}>
            {children}
          </Link>
        ) : (
          <button className="page-overview-btn" onClick={action}>
            Log Out
          </button>
        )}
      </h2>
    </div>
  );
};

export default PageOverview;
