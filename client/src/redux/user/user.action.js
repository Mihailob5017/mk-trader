import {
  GET_TOKEN_FROM_STORAGE,
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from '../types';
const axios = require('axios').default;

export const getTokenFromStorage = () => ({
  type: GET_TOKEN_FROM_STORAGE,
  payload: localStorage.getItem('auth-token') || null,
});

const signInStart = () => ({ type: SIGN_IN_START });

const signInSuccess = (token) => ({
  type: SIGN_IN_SUCCESS,
  payload: token,
});

const signInFailure = (err) => ({ type: SIGN_IN_FAILURE, payload: err });

export const asyncSignInStart = (data) => async (dispatch) => {
  const { email, password, kmsi } = data;
  dispatch(signInStart());

  try {
    const response = await axios.post('http://localhost:5000/signin', {
      email,
      password,
    });
    const token = response.data;
    if (kmsi) localStorage.setItem('auth-token', token);
    dispatch(signInSuccess(token));
  } catch (error) {
    console.log(error);
    dispatch(signInFailure(error));
  }
};

const signUpStart = () => ({ type: SIGN_UP_START });

const signUpSuccess = (obj) => ({ type: SIGN_UP_SUCCESS, payload: obj });

const signUpFailure = (err) => ({ type: SIGN_UP_FAILURE, payload: err });

export const asyncSignUpStart = (inputObject, kmsi) => async (dispatch) => {
  dispatch(signUpStart);

  try {
    const response = await axios.post('http://localhost:5000/signup', {
      ...inputObject,
    });
    const token = response.data;
    if (kmsi) localStorage.setItem('auth-token', token);
    dispatch(signUpSuccess(token));
  } catch (error) {
    console.log(error);
    dispatch(signUpFailure(error));
  }
};

export const signOut = () => {
  localStorage.removeItem('auth-token');
  return { type: SIGN_OUT };
};
