import React from 'react';
import { Link } from 'react-router-dom';
import './page-overview.style.scss';
const PageOverview = ({ name, link }) => {
  return (
    <div className="page-overview-container">
      <h2 className="page-overview-text">
        <Link to={link}>{name}</Link>
      </h2>
    </div>
  );
};

export default PageOverview;
