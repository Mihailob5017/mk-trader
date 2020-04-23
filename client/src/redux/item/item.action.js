import {
  GET_ITEMS_START,
  GET_ITEMS_FAILURE,
  GET_ITEMS_SUCCESS,
  GET_SCORED_ITEMS_START,
  GET_SCORED_ITEMS_SUCCESS,
  GET_SCORED_ITEMS_FAILURE,
  UPDATE_SCORED_ITEMS,
  CLEAN_UP_ITEMS,
  SET_IF_UPDATED,
  SEARCH_ITEMS_START,
  SEARCH_ITEMS_SUCCESS,
  SEARCH_ITEMS_FAILURE,
  SEARCH_AND_FILTER_START,
  SEARCH_AND_FILTER_SUCCESS,
  SEARCH_AND_FILTER_FAILURE,
  GET_ITEM,
} from '../types';
import { filterOutItem } from '../../helpers/helpers';
const Axios = require('axios').default;

const getItemsStart = () => ({ type: GET_ITEMS_START });
const getItemsSuccess = (items) => ({
  type: GET_ITEMS_SUCCESS,
  payload: items,
});
const getItemsFailure = (err) => ({ type: GET_ITEMS_FAILURE, payload: err });

export const getItemsAsync = () => async (dispatch) => {
  dispatch(getItemsStart());
  try {
    const { data } = await Axios.get('http://localhost:5000/items');
    dispatch(getItemsSuccess(data));
  } catch (error) {
    dispatch(getItemsFailure(error));
  }
};

const getScoredItemsStart = () => ({ type: GET_SCORED_ITEMS_START });

const getScoredItemsSuccess = (items) => ({
  type: GET_SCORED_ITEMS_SUCCESS,
  payload: items,
});

const getScoredItemsFailure = (err) => ({
  type: GET_SCORED_ITEMS_FAILURE,
  payload: err,
});

export const getScoredItemsAsync = (token) => async (dispatch) => {
  dispatch(getScoredItemsStart());
  try {
    const { data } = await Axios.get('http://localhost:5000/user/scored', {
      headers: { ['auth-token']: token },
    });

    dispatch(getScoredItemsSuccess(data));
  } catch (error) {
    dispatch(getScoredItemsFailure(error));
  }
};

export const updateScoredItems = (items) => ({
  type: UPDATE_SCORED_ITEMS,
  payload: items,
});

export const cleanUp = () => ({ type: CLEAN_UP_ITEMS });
export const willUpdate = () => ({ type: SET_IF_UPDATED });

const searchItemsStart = () => ({ type: SEARCH_ITEMS_START });
const searchItemsSuccess = (items) => ({
  type: SEARCH_ITEMS_SUCCESS,
  payload: items,
});
const searchItemsFailure = (err) => ({
  type: SEARCH_ITEMS_FAILURE,
  payload: err,
});

export const searchItemsAsync = (name) => async (dispatch) => {
  dispatch(searchItemsStart());
  try {
    const { data } = await Axios.post('http://localhost:5000/items/search', {
      name,
    });
    dispatch(searchItemsSuccess(data));
  } catch (error) {
    dispatch(searchItemsFailure(error));
  }
};

const searchAndFilterStart = () => ({ type: SEARCH_AND_FILTER_START });
const searchAndFilterSuccess = (res) => ({
  type: SEARCH_AND_FILTER_SUCCESS,
  payload: res,
});
const searchAndFilterFailure = (err) => ({
  type: SEARCH_AND_FILTER_FAILURE,
  payload: err,
});

export const asyncSearchAndFilter = (object) => async (dispatch) => {
  dispatch(searchAndFilterStart());
  try {
    const { data } = await Axios.post(
      'http://localhost:5000/items/handled',
      object
    );
    dispatch(searchAndFilterSuccess(data));
  } catch (error) {
    dispatch(searchAndFilterFailure(error));
  }
};

export const getItemFromStore = (store, item) => ({
  type: GET_ITEM,
  payload: filterOutItem(store, item),
});
