import React from 'react';
import { Link } from 'react-router-dom';
import './footer.style.scss';
const FooterComponent = () => {
  return (
    <div className="footer-component">
      <div className="footer-btn">
        <Link to="/">Go Back</Link>
      </div>

      <div className="footer-text">
        <h1>Mihailo Boskovic 2020</h1>
        <h3>All rights reviced</h3>
      </div>
    </div>
  );
};

export default FooterComponent;
