import React from "react";
import { Link, withRouter } from "react-router-dom";

//  Helper Components
import "./footer.style.scss";
const FooterComponent = ({ location }) => {
  return (
    <div className="footer-component change">
      {location.pathname !== "/" && (
        <div className="footer-btn">
          <Link to="/">Go Back</Link>
        </div>
      )}
      <div className="footer-text">
        <h2>Mihailo Boskovic 2020</h2>
        <h3>All rights reviced</h3>
      </div>
    </div>
  );
};

export default withRouter(FooterComponent);
