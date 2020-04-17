import { createSelector } from 'reselect';

const Items = (state) => state.items;

export const getItemsFromStore = createSelector(
  [Items],
  (items) => items.store
);

export const scoredItems = createSelector([Items], (items) => items.scored);