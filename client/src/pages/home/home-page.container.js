import React, { useEffect } from 'react';
import HomePage from './home-page';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getItemsAsync } from '../../redux/item/item.action';
import { getItemsFromStore } from '../../redux/item/item.selector';
import { hasToken } from '../../redux/user/user.selector';

const HomePageContainer = ({ getItemsAsync, hasToken, getItemsFromStore }) => {
  useEffect(() => {
    getItemsAsync();
  }, []);

  return <HomePage />;
};

const mapStateToProps = createStructuredSelector({
  hasToken,
  getItemsFromStore,
});
const mapDispatchToProps = (dispatch) => ({
  getItemsAsync: () => dispatch(getItemsAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
