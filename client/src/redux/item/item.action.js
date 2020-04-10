import {
  GET_ITEMS_START,
  GET_ITEMS_FAILURE,
  GET_ITEMS_SUCCESS,
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
    const {data} = await Axios.get('http://localhost:5000/items');
    dispatch(getItemsSuccess(data));
  } catch (error) {
    dispatch(getItemsFailure(error));
  }
};
