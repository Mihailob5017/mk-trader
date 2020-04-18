import React, { useEffect, useState } from 'react';
import HomePage from './home-page';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  getItemsAsync,
  getScoredItemsAsync,
  updateScoredItems,
} from '../../redux/item/item.action';
import { appendScoredList } from '../../helpers/helpers';
import { getItemsFromStore, scoredItems } from '../../redux/item/item.selector';
import { hasToken, getToken } from '../../redux/user/user.selector';
import LoadingComponent from '../../components/loading/loading.component';

const HomePageContainer = ({
  getItemsAsync,
  hasToken,
  getToken,
  getScoredItems,
  getItemsFromStore,
  scoredItems,
  updateScoredItems,
}) => {
  const [newlyScored, setNewlyScored] = useState({});

  const addNewlyScored = (newscore) =>
    setNewlyScored(appendScoredList(newlyScored, newscore));

  useEffect(() => {
    getItemsAsync();
    const token =
      localStorage.getItem('auth-token') ||
      sessionStorage.getItem('auth-token') ||
      getToken;
    if (token && scoredItems === null) {
      getScoredItems(token);
    }
    return () => {
      if (hasToken) updateScoredItems(newlyScored);
    };
  }, []);

  return getItemsFromStore !== null ? (
    <HomePage
      addNewlyScored={addNewlyScored}
      scoredItems={scoredItems || {}}
      hasToken={hasToken}
      items={getItemsFromStore}
    />
  ) : (
    <LoadingComponent />
  );
};

const mapStateToProps = createStructuredSelector({
  hasToken,
  getToken,
  getItemsFromStore,
  scoredItems,
});
const mapDispatchToProps = (dispatch) => ({
  getItemsAsync: () => dispatch(getItemsAsync()),
  getScoredItems: (token) => dispatch(getScoredItemsAsync(token)),
  updateScoredItems: (items) => dispatch(updateScoredItems(items)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
