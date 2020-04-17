import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../redux/user/user.action';
import { createStructuredSelector } from 'reselect';
import { hasToken } from '../../redux/user/user.selector';
import StartPage from './start.page';
import { getScoredItemsAsync } from '../../redux/item/item.action';
const StartPageContainer = ({
  hasToken,
  signOut,
}) => {
  useEffect(() => {
  
  });

  return <StartPage hasToken={hasToken} signOut={signOut} />;
};
const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
});
const mapStateToProps = createStructuredSelector({ hasToken,});

export default connect(mapStateToProps, mapDispatchToProps)(StartPageContainer);
