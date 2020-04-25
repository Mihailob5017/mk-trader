import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getToken } from '../../redux/user/user.selector';
import { createStructuredSelector } from 'reselect';
import AddPage from './add-page';
const Axios = require('axios').default;

const AddPageContainer = ({ getToken }) => {
  const [token, setToken] = useState('');
  const addItem = async (item, token) => {
    Axios.post('http://localhost:5000/store/add', item, {
      headers: { ['auth-token']: token },
    });
  };

  useEffect(() => {
    setToken(
      localStorage.getItem('auth-token') ||
        sessionStorage.getItem('auth-token') ||
        getToken
    );
    
  });

  return <AddPage token={token} addItem={addItem} />;
};
const mapStateToProps = createStructuredSelector({ getToken });
export default connect(mapStateToProps)(AddPageContainer);
