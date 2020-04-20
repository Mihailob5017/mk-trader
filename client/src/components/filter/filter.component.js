import React from 'react';
import './filter.style.scss';
const FilterComponent = ({ close }) => {
  return (
    <div className="filter-container">
      <div className="filter-exit">
        <i className="far fa-times-circle" onClick={close}></i>
      </div>
    </div>
  );
};

export default FilterComponent;
