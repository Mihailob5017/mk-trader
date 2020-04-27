import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//  Helper Components
import { asyncGetUserProfile } from '../../redux/user/user.action';
import { getItemsAsync } from '../../redux/item/item.action';
import { getToken, cartItems, profile } from '../../redux/user/user.selector';
import { storeItems } from '../../redux/item/item.selector';
import { getCartItems } from '../../helpers/helpers';

//  Components
import ProfilePage from './profile-page';
import LoadingComponent from '../../components/loading/loading.component';

const ProfilePageContainer = ({
  getToken,
  asyncGetUserProfile,
  getItemsAsync,
  profile,
  storeItems,
  cartItems,
}) => {
  useEffect(() => {
    const token =
      localStorage.getItem('auth-token') ||
      sessionStorage.getItem('auth-token') ||
      getToken;

    if (profile === null) asyncGetUserProfile(token);
    if (storeItems === null) getItemsAsync();
  });

  return storeItems === null || profile === null ? (
    <LoadingComponent />
  ) : (
    <ProfilePage
      profile={profile}
      items={getCartItems(storeItems, cartItems)}
    />
  );
};

const mapStateToProps = createStructuredSelector({
  getToken,
  storeItems,
  cartItems,
  profile,
});

const mapDispatchToProps = (dispatch) => ({
  asyncGetUserProfile: (token) => dispatch(asyncGetUserProfile(token)),
  getItemsAsync: () => dispatch(getItemsAsync()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilePageContainer);
