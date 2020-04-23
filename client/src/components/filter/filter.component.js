import React, { useState } from 'react';
import './filter.style.scss';
import SearchComponent from '../search/search.component';
import SortItemsComponent from '../sort-items/sort-items.component';
import SelectComponent from '../select/select.component';
import InputComponent from '../input/input.component';
import ButtonComponent from '../button/button.somponent';
const searchNameType = [
  { name: 'Type', value: 'type' },
  { name: 'Price', value: 'price' },
  { name: 'Rating', value: 'score' },
];
const types = [
  { name: 'Male', value: 'male' },
  { name: 'Female', value: 'female' },
  { name: 'Sneakers', value: 'shoes' },
  { name: 'Jackets', value: 'jackets' },
];

const FilterComponent = ({ close, searchByName, searchAndFilter }) => {
  //  Search
  const [searchParam, setSearchParam] = useState('');
  const [param1, setParam1] = useState('');
  const [param2, setParam2] = useState('');

  //  Sort
  const [sortValue, setSortValue] = useState(false);
  const [sortByName, setSortByName] = useState('name');

  const handleChange = (e) => {
    const { value, name } = e.target;
    //  Search
    if (name === 'search-type') setSearchParam(value);
    if (name === 'item-type' || name === 'param1') setParam1(value);
    if (name === 'param2') setParam2(value);
    //  Sort
    if (name === 'radio-group') setSortValue(!sortValue);
    if (setSortByName === 'sort-by-name') setSortByName(value);
  };

  const executeSearchAndFilter = () => {
    console.log('elo');
    const obj = {
      filter: {
        type: searchParam,
        param1: param1,
        param2: param2,
      },
      sort: {
        type: sortByName,
        param: sortValue ? 'asc' : 'desc',
      },
    };
    searchAndFilter(obj);
    setSearchParam('');
    setParam1('');
    setParam2('');
    setSortByName('');
    setSortValue(false);
  };

  return (
    <div className="filter-container">
      <div className="filter-exit">
        <i className="far fa-times-circle" onClick={close}></i>
      </div>
      <SearchComponent action={searchByName} />

      <div className="filter-body">
        <div className="search-items-container">
          <SelectComponent
            options={searchNameType}
            value={searchParam}
            message="Search by type"
            name="search-type"
            handleChange={handleChange}
          />
          {searchParam !== '' ? (
            searchParam === 'type' ? (
              <SelectComponent
                options={types}
                value={param1}
                message="Type of Item"
                name="item-type"
                handleChange={handleChange}
              />
            ) : (
              <>
                <InputComponent
                  placeholder={searchParam === 'price' ? 'Price' : 'Rating'}
                  label="Min:"
                  name="param1"
                  value={param1}
                  handleChange={handleChange}
                />
                <InputComponent
                  placeholder={searchParam === 'price' ? 'Price' : 'Rating'}
                  label="Max:"
                  name="param2"
                  value={param2}
                  handleChange={handleChange}
                />
              </>
            )
          ) : (
            <></>
          )}
        </div>
        <SortItemsComponent
          sortValue={sortValue}
          sortByName={sortByName}
          handleChange={handleChange}
        />
      </div>
      <div className="search-and-filter-btn">
        <ButtonComponent actionHandler={executeSearchAndFilter}>
          Search
        </ButtonComponent>
      </div>
    </div>
  );
};

export default FilterComponent;
