import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../redux/user/user.action';
import { createStructuredSelector } from 'reselect';
import { hasToken, getToken } from '../../redux/user/user.selector';
import StartPage from './start.page';
import { getScoredItemsAsync } from '../../redux/item/item.action';
import { scoredItems } from '../../redux/item/item.selector';

const StartPageContainer = ({ hasToken, getToken, signOut, scoredItems }) => {
  useEffect(() => {
    getScoredItemsAsync(getToken);
  }, []);

  return (
    <StartPage
      hasToken={hasToken}
      token={getToken}
      signOut={() => signOut(getToken, scoredItems)}
    />
  );
};
const mapDispatchToProps = (dispatch) => ({
  signOut: (token, scoredItems) => dispatch(signOut(token, scoredItems)),
  getScoredItems: (token) => dispatch(getScoredItemsAsync(token)),
});
const mapStateToProps = createStructuredSelector({
  hasToken,
  getToken,
  scoredItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(StartPageContainer);
