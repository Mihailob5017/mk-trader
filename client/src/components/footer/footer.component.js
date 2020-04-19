import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './footer.style.scss';
const FooterComponent = ({ location }) => {
  return (
    <div className="footer-component">
      {location.pathname !== '/' && (
        <div className="footer-btn">
          <Link to="/">Go Back</Link>
        </div>
      )}
      <div className="footer-text">
        <h1>Mihailo Boskovic 2020</h1>
        <h3>All rights reviced</h3>
      </div>
    </div>
  );
};

export default withRouter(FooterComponent);
