import {
  GET_TOKEN_FROM_STORAGE,
  SIGN_IN_START,
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
  SIGN_OUT_START,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_UP_START,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  GET_USER_PROFILE_START,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE,
  GET_CART_ITEMS,
  ADD_TO_CART,
  CLEAR_CART,
} from '../types';
import { newCartItems } from '../../helpers/helpers';
const INITIAL_STATE = {
  cart: null,
  user: null,
  token: null,
  error: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TOKEN_FROM_STORAGE: {
      return { ...state, token: action.payload };
    }
    case SIGN_IN_START: {
      return state;
    }
    case SIGN_IN_FAILURE: {
      return { ...state, error: action.payload, token: null };
    }
    case SIGN_IN_SUCCESS: {
      return { ...state, token: action.payload, error: null };
    }
    case SIGN_UP_START: {
      return state;
    }
    case SIGN_UP_SUCCESS: {
      return { ...state, token: action.payload, error: null };
    }
    case SIGN_UP_FAILURE: {
      return { ...state, token: null, error: action.payload };
    }
    case SIGN_OUT_START: {
      return state;
    }
    case SIGN_OUT_FAILURE: {
      return { ...state, error: action.payload };
    }
    case SIGN_OUT_SUCCESS: {
      return { ...state, token: null, error: null, user: null, cart: null };
    }

    case GET_USER_PROFILE_START:
      return state;

    case GET_USER_PROFILE_SUCCESS:
      return { ...state, user: action.payload, error: null };

    case GET_USER_PROFILE_FAILURE:
      return { ...state, user: null, error: action.payload };

    case GET_CART_ITEMS:
      return { ...state, cart: action.payload };

    case ADD_TO_CART:
      return { ...state, cart: newCartItems(state.cart, action.payload) };

    case CLEAR_CART:
      return { ...state, cart: null };

    default:
      return state;
  }
};

export default userReducer;
