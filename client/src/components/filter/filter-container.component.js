import React from 'react';
import FilterComponent from './filter.component';
import { connect } from 'react-redux';
import { searchItemsAsync } from '../../redux/item/item.action';
const FilterComonentContainer = ({ close, searchItemsAsync }) => {
  const searchByName = (name) => {
    console.log(searchItemsAsync());
    searchItemsAsync(name);
  };

  return <FilterComponent searchByName={searchByName} close={close} />;
};
const mapDispatchToProps = (dispatch) => ({
  searchItemsAsync: (name) => dispatch(searchItemsAsync(name)),
});

export default connect(null, mapDispatchToProps)(FilterComonentContainer);
