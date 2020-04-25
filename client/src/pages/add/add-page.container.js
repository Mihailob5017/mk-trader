import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {
  getToken,
  willAddItems,
  profile,
} from '../../redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import { asyncGetUserProfile } from '../../redux/user/user.action';
import AddPage from './add-page';
import LoadingComponent from '../../components/loading/loading.component';
import RejectComponent from '../../components/reject/reject.component';
const Axios = require('axios').default;

const AddPageContainer = ({
  getToken,
  asyncGetUserProfile,
  willAddItems,
  profile,
}) => {
  const [token, setToken] = useState('');
  const addItem = async (item, token) => {
    Axios.post('http://localhost:5000/store/add', item, {
      headers: { ['auth-token']: token },
    });
  };

  useEffect(() => {
    const token =
      localStorage.getItem('auth-token') ||
      sessionStorage.getItem('auth-token') ||
      getToken;
    setToken(token);
    asyncGetUserProfile(token);
  });

  return profile === null ? (
    <LoadingComponent />
  ) : (
    <>
      {willAddItems === true ? (
        <AddPage token={token} addItem={addItem} />
      ) : (
        <RejectComponent />
      )}
    </>
  );
};
const mapStateToProps = createStructuredSelector({
  getToken,
  willAddItems,
  profile,
});
const mapDispatchToProps = (dispatch) => ({
  asyncGetUserProfile: (token) => dispatch(asyncGetUserProfile(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddPageContainer);
