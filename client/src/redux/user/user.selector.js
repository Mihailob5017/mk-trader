import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const getToken = createSelector([selectUser], user => user.token);

export const hasToken = createSelector([selectUser], user =>
  user.token !== null ? true : false
);