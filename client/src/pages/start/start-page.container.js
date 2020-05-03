import React, { useEffect } from 'react';
import { connect } from 'react-redux';

//  Helper Components
import { signOut } from '../../redux/user/user.action';
import { createStructuredSelector } from 'reselect';
import { hasToken, getToken } from '../../redux/user/user.selector';
import { getScoredItemsAsync } from '../../redux/item/item.action';
import { scoredItems, shouldUpdate } from '../../redux/item/item.selector';

//  Components
import StartPage from './start.page';
const StartPageContainer = ({
  hasToken,
  getToken,
  signOut,
  scoredItems,
  shouldUpdate,
}) => {
  useEffect(() => {
    getScoredItemsAsync(getToken);
  }, []);

  return (
    <StartPage
      hasToken={hasToken}
      token={getToken}
      signOut={() => signOut(getToken, scoredItems, shouldUpdate)}
    />
  );
};
const mapDispatchToProps = (dispatch) => ({
  signOut: (token, scoredItems, shouldUpdate) =>
    dispatch(signOut(token, scoredItems, shouldUpdate)),
  getScoredItems: (token) => dispatch(getScoredItemsAsync(token)),
});
const mapStateToProps = createStructuredSelector({
  hasToken,
  getToken,
  scoredItems,
  shouldUpdate,
});

export default connect(mapStateToProps, mapDispatchToProps)(StartPageContainer);
