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
import { storeItems, scoredItems } from '../../redux/item/item.selector';
import { hasToken, getToken, cartItems } from '../../redux/user/user.selector';
import { asyncGetUserProfile } from '../../redux/user/user.action';
import LoadingComponent from '../../components/loading/loading.component';

const HomePageContainer = ({
  getItemsAsync,
  hasToken,
  getToken,
  getScoredItems,
  storeItems,
  scoredItems,
  willUpdate,
  asyncGetUserProfile,
  updateScoredItems,
  cartItems,
}) => {
  const [newlyScored, setNewlyScored] = useState({});
  const [token, setToken] = useState('');
  const addNewlyScored = (newscore) =>
    setNewlyScored(appendScoredList(newlyScored, newscore));

  useEffect(() => {
    getItemsAsync();
    const token =
      localStorage.getItem('auth-token') ||
      sessionStorage.getItem('auth-token') ||
      getToken;
    setToken(token);
    if (token) asyncGetUserProfile(token);
    if (token && scoredItems === null) {
      getScoredItems(token);
    }
    return () => {
      if (hasToken) updateScoredItems(newlyScored);
      if (checkIfEmpty(newlyScored)) willUpdate();
    };
  }, []);
  if (hasToken)
    return storeItems !== null &&
      scoredItems !== null &&
      cartItems !== null ? (
      <HomePage
        cartItems={cartItems}
        addNewlyScored={addNewlyScored}
        scoredItems={scoredItems}
        hasToken={hasToken}
        items={storeItems}
        getToken={token}
      />
    ) : (
      <LoadingComponent />
    );
  return storeItems !== null ? (
    <HomePage
      addNewlyScored={addNewlyScored}
      scoredItems={{}}
      cartItems={[]}
      hasToken={hasToken}
      items={storeItems}
      getToken={token}
    />
  ) : (
    <LoadingComponent />
  );
};

const mapStateToProps = createStructuredSelector({
  hasToken,
  getToken,
  storeItems,
  scoredItems,
  cartItems,
});
const mapDispatchToProps = (dispatch) => ({
  getItemsAsync: () => dispatch(getItemsAsync()),
  getScoredItems: (token) => dispatch(getScoredItemsAsync(token)),
  updateScoredItems: (items) => dispatch(updateScoredItems(items)),
  willUpdate: () => dispatch(willUpdate()),
  asyncGetUserProfile: (tkn) => dispatch(asyncGetUserProfile(tkn)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePageContainer);
