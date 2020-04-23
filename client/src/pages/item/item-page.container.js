import React, { useEffect } from 'react';
import LoadingComponent from '../../components/loading/loading.component';
import { getItemFromStore } from '../../redux/item/item.action';
import { getItem, getItemsFromStore } from '../../redux/item/item.selector';
import { createStructuredSelector } from 'reselect';
import { getLastParam } from '../../helpers/helpers';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ItemPage from './item-page';
const ItemPageContainer = ({
  location,
  getItem,
  findItem,
  getItemsFromStore,
}) => {
  console.log();
  useEffect(() => {
    findItem(getItemsFromStore, getLastParam(location.pathname));
  }, []);
  return getItem === null ? <LoadingComponent /> : <ItemPage item={getItem} />;
};
const mapStateToProps = createStructuredSelector({
  getItem,
  getItemsFromStore,
});
const mapDispatchToProps = (dispatch) => ({
  findItem: (store, item) => dispatch(getItemFromStore(store, item)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ItemPageContainer)
);
