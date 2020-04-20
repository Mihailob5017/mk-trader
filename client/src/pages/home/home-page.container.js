import React, { useEffect, useState } from 'react';
import HomePage from './home-page';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  getItemsAsync,
  getScoredItemsAsync,
  updateScoredItems,
  willUpdate,
} from '../../redux/item/item.action';
import { appendScoredList, checkIfEmpty } from '../../helpers/helpers';
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
  willUpdate,
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
      if (checkIfEmpty(newlyScored)) willUpdate();
    };
  }, []);
  if (hasToken)
    return getItemsFromStore !== null && scoredItems !== null ? (
      <HomePage
        addNewlyScored={addNewlyScored}
        scoredItems={scoredItems}
        hasToken={hasToken}
        items={getItemsFromStore}
      />
    ) : (
      <LoadingComponent />
    );
  return getItemsFromStore !== null ? (
    <HomePage
      addNewlyScored={addNewlyScored}
      scoredItems={{}}
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
  willUpdate: () => dispatch(willUpdate()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
