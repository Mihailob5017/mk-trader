import React from 'react';
import './filter.style.scss';
import SearchComponent from '../search/search.component';
const FilterComponent = ({ close }) => {
  return (
    <div className="filter-container">
      <div className="filter-exit">
        <i className="far fa-times-circle" onClick={close}></i>
      </div>
      <SearchComponent />
    </div>
  );
};

export default FilterComponent;
