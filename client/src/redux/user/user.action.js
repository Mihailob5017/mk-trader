import {
  GET_TOKEN_FROM_STORAGE,
  SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_OUT_FAILURE,
  GET_USER_PROFILE_START,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE,
  GET_CART_ITEMS,
} from '../types';
import { cleanUp } from '../item/item.action';
const axios = require('axios').default;

export const getTokenFromStorage = () => ({
  type: GET_TOKEN_FROM_STORAGE,
  payload:
    localStorage.getItem('auth-token') ||
    sessionStorage.getItem('auth-token') ||
    null,
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
    else sessionStorage.setItem('auth-token', token);
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
    sessionStorage.setItem('auth-token', token);
    dispatch(signUpSuccess(token));
  } catch (error) {
    console.log(error);
    dispatch(signUpFailure(error));
  }
};

const signOutStart = () => ({ type: SIGN_OUT_START });
const signOutSuccess = () => ({ type: SIGN_OUT_SUCCESS });
const signOutFailure = (err) => ({ type: SIGN_OUT_FAILURE, payload: err });

export const signOut = (token, scoredItems, shouldUpdate) => async (
  dispatch
) => {
  dispatch(signOutStart());
  localStorage.removeItem('auth-token');
  sessionStorage.removeItem('auth-token');
  dispatch(cleanUp());
  try {
    if (scoredItems && shouldUpdate) {
      await axios.post(
        'http://localhost:5000/user/scored',
        { scored: scoredItems },
        {
          headers: { ['auth-token']: token },
        }
      );
    }
    dispatch(signOutSuccess());
  } catch (error) {
    dispatch(signOutFailure(error));
  }
};

const getProfileStart = () => ({ type: GET_USER_PROFILE_START });
const getProfileSuccess = (profile) => ({
  type: GET_USER_PROFILE_SUCCESS,
  payload: profile,
});
const getPRofileFailure = (err) => ({
  type: GET_USER_PROFILE_FAILURE,
  payload: err,
});
const getCartItems = (items) => ({ type: GET_CART_ITEMS, payload: items });

export const asyncGetUserProfile = (token) => async (dispatch) => {
  dispatch(getProfileStart());
  try {
    const { data } = await axios.get('http://localhost:5000/user', {
      headers: { ['auth-token']: token },
    });
    dispatch(getCartItems(data.cartItems));
    dispatch(getProfileSuccess(data));
  } catch (error) {
    dispatch(getPRofileFailure(error));
  }
};
