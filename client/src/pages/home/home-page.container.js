import React, { useEffect } from 'react';
import HomePage from './home-page';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getItemsAsync } from '../../redux/item/item.action';
import { getItemsFromStore } from '../../redux/item/item.selector';
import { hasToken } from '../../redux/user/user.selector';
import LoadingComponent from '../../components/loading/loading.component';

const HomePageContainer = ({ getItemsAsync, hasToken, getItemsFromStore }) => {
  useEffect(() => {
    getItemsAsync();
  }, []);

  return getItemsFromStore !== null ? (
    <HomePage hasToken={hasToken} items={getItemsFromStore} />
  ) : (
    <LoadingComponent />
  );
};

const mapStateToProps = createStructuredSelector({
  hasToken,
  getItemsFromStore,

});
const mapDispatchToProps = (dispatch) => ({
  getItemsAsync: () => dispatch(getItemsAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
