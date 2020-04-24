import React, { useEffect } from 'react';
import LoadingComponent from '../../components/loading/loading.component';
import { getItemFromStore } from '../../redux/item/item.action';
import { getItem, getItemsFromStore } from '../../redux/item/item.selector';
import { hasToken } from '../../redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import { getLastParam } from '../../helpers/helpers';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ItemPage from './item-page';
const ItemPageContainer = ({
  location,
  getItem,
  hasToken,
  findItem,
  getItemsFromStore,
}) => {
  useEffect(() => {
    findItem(getItemsFromStore, getLastParam(location.pathname));
    return () => {
      sessionStorage.removeItem('curr-item');
    };
  }, []);
  return getItem === null ? (
    <LoadingComponent />
  ) : (
    <ItemPage token={hasToken} item={getItem[0]} />
  );
};
const mapStateToProps = createStructuredSelector({
  getItem,
  getItemsFromStore,
  hasToken,
});
const mapDispatchToProps = (dispatch) => ({
  findItem: (store, item) => dispatch(getItemFromStore(store, item)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(ItemPageContainer)
);
