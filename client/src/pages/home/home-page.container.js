import React, { useEffect } from 'react';
import HomePage from './home-page';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getItemsAsync, getScoredItems } from '../../redux/item/item.action';
import { getItemsFromStore, scoredItems } from '../../redux/item/item.selector';
import { hasToken } from '../../redux/user/user.selector';
import LoadingComponent from '../../components/loading/loading.component';

const HomePageContainer = ({
  getItemsAsync,
  hasToken,
  getItemsFromStore,
  scoredItems,
  getScoredItems,
}) => {
  useEffect(() => {
    getItemsAsync();
    getScoredItems();
  }, []);
  return getItemsFromStore !== null && scoredItems!==null ? (
    <HomePage
      
      scoredItems={scoredItems}
      hasToken={hasToken}
      items={getItemsFromStore}
    />
  ) : (
    <LoadingComponent />
  );
};

const mapStateToProps = createStructuredSelector({
  hasToken,
  getItemsFromStore,
  scoredItems,
});
const mapDispatchToProps = (dispatch) => ({
  getItemsAsync: () => dispatch(getItemsAsync()),
  getScoredItems: () => dispatch(getScoredItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
