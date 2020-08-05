import React, { useEffect } from "react";
import { connect } from "react-redux";

//  Helper Components

import {
  searchItemsAsync,
  asyncSearchAndFilter,
} from "../../redux/item/item.action";
import { getTheme, setTheme } from "../../helpers/helper-functions";
//  Components
import FilterComponent from "./filter.component";
const FilterComonentContainer = ({
  close,
  searchItemsAsync,
  asyncSearchAndFilter,
}) => {
  useEffect(() => setTheme(getTheme()));
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
