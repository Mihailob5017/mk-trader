import React from 'react';
import { Link } from 'react-router-dom';
import './page-overview.style.scss';
const PageOverview = ({ children, to }) => {
  return (
    <div className="page-overview-container">
      <h2 className="page-overview-text">
        <Link className='page-overview-link' to={to}>{children}</Link>
      </h2>
    </div>
  );
};

export default PageOverview;
