import {
  GET_ITEMS_START,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILURE,
} from '../types';
const INITIAL_STATE = {
  store: null,
  cart: null,
  error: null,
};

const itemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ITEMS_START:
      return state;
    case GET_ITEMS_SUCCESS: {
      return { ...state, store: action.payload, error: null };
    }
    case GET_ITEMS_FAILURE: {
      return { ...state, store: null, error: action.payload };
    }
    default: {
      return state;
    }
  }
};

export default itemReducer;
