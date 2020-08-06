import React from 'react';
import { Link } from 'react-router-dom';
//  Components
import './page-overview.style.scss';
const PageOverview = ({ image, children, to, isBtn, action }) => {
  return (
    <div className="page-overview-container">
      <img className="page-overview-image" alt='' src={image} />
      <h2 className="page-overview-text">
        {isBtn !== true ? (
          <Link className="page-overview-link" to={to}>
            {children}
          </Link>
        ) : (
          <button className="page-overview-btn" onClick={action}>
            Sign Out
          </button>
        )}
      </h2>
    </div>
  );
};

export default PageOverview;
