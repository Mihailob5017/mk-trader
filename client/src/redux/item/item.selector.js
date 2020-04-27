import { createSelector } from 'reselect';

const Items = (state) => state.items;

export const storeItems = createSelector([Items], (items) => items.store);

export const scoredItems = createSelector([Items], (items) => items.scored);

export const shouldUpdate = createSelector(
  [Items],
  (items) => items.shouldUpdate
);

export const getItem = createSelector([Items], (items) => items.item);
