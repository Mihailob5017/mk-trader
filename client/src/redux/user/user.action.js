import { GET_TOKEN_FROM_STORAGE } from '../types';

export const getTokenFromStorage = () => ({
  type: GET_TOKEN_FROM_STORAGE,
  payload: localStorage.getItem('auth-token') || null
});
