import React from 'react';
import FilterComponent from './filter.component';
import { connect } from 'react-redux';
import {
  searchItemsAsync,
  asyncSearchAndFilter,
} from '../../redux/item/item.action';
const FilterComonentContainer = ({
  close,
  searchItemsAsync,
  asyncSearchAndFilter,
}) => {
  const searchByName = (name) => searchItemsAsync(name);

  return (
    <FilterComponent
      searchByName={searchByName}
      searchAndFilter={asyncSearchAndFilter}
      close={close}
    />
  );
};
const mapDispatchToProps = (dispatch) => ({
  searchItemsAsync: (name) => dispatch(searchItemsAsync(name)),
  asyncSearchAndFilter: (obj) => dispatch(asyncSearchAndFilter(obj)),
});

export default connect(null, mapDispatchToProps)(FilterComonentContainer);
