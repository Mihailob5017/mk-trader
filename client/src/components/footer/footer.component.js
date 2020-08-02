import React from "react";
import { Link, withRouter } from "react-router-dom";

//  Helper Components
import "./footer.style.scss";
const FooterComponent = ({ location }) => {
  return (
    <div className="footer-component">
      {location.pathname !== "/" && (
        <div className="footer-btn change-border">
          <Link className="change" to="/">
            Go Back
          </Link>
        </div>
      )}
      <div className="footer-text change">
        <h2>Mihailo Boskovic 2020</h2>
        <h3>All rights reviced</h3>
      </div>
    </div>
  );
};

export default withRouter(FooterComponent);
