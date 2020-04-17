import {
  GET_ITEMS_START,
  GET_ITEMS_FAILURE,
  GET_ITEMS_SUCCESS,
  GET_SCORED_ITEMS_START,
  GET_SCORED_ITEMS_SUCCESS,
  GET_SCORED_ITEMS_FAILURE,
} from '../types';
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
