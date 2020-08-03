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
      <div className="footer-text">
        <h2 className='change'>Mihailo Bošković 2020</h2>

        <a className='change' href="https://www.linkedin.com/in/mihailo-boskovic-449634193/">
          Contact me
        </a>
      </div>
    </div>
  );
};

export default withRouter(FooterComponent);
