import React from "react";
import "./subsection.style.scss";
const SubsectionComponent = ({ children, number, state }) => {
  return number === state ? (
    <div className="main-subsection change-bg">{children}</div>
  ) : (
    <></>
  );
};

export default SubsectionComponent;
