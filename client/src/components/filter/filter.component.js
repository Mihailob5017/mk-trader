import React from 'react';
import './filter.style.scss';
import SearchComponent from '../search/search.component';
const FilterComponent = ({ close, searchByName }) => {
  return (
    <div className="filter-container">
      <div className="filter-exit">
        <i className="far fa-times-circle" onClick={close}></i>
      </div>
      <SearchComponent action={searchByName} />
    </div>
  );
};

export default FilterComponent;
