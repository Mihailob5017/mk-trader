import {
  GET_ITEMS_START,
  GET_ITEMS_FAILURE,
  GET_ITEMS_SUCCESS,
  GET_SCORED_ITEMS,
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

export const getScoredItems = () => {
  let data = [];
  if (localStorage.getItem('scored') !== null)
    data = JSON.parse(localStorage.getItem('scored'));
  return { type: GET_SCORED_ITEMS, payload: data };
};
