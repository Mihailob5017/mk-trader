import React from 'react';
import './sort-items.style.scss';
import SelectComponent from '../select/select.component';
import RadioComponent from '../radio/radio.component';
const sortValues = [
  {
    name: 'Ascending',
    value: 'asc',
  },
  { name: 'Descending', value: 'desc' },
];
const options = [
  {
    name: 'Name',
    value: 'name',
  },
  {
    name: 'Price',
    value: 'price',
  },
  {
    name: 'Score',
    value: 'score',
  },
];
const SortItemsComponent = ({ handleChange, sortBy, sortValue }) => {
  return (
    <div className="sort-components-container">
      <SelectComponent
        message="Sort by"
        value={sortBy}
        handleChange={handleChange}
        name="sort-by-name"
        options={options}
      />
      <RadioComponent
        handleChange={handleChange}
        value={sortValue ? 'asc' : 'desc'}
        values={sortValues}
      />
    </div>
  );
};

export default SortItemsComponent;
