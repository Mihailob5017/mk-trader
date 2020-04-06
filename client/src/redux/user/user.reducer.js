import {
  GET_TOKEN_FROM_STORAGE,
  SIGN_IN_START,
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
  SIGN_OUT,
} from '../types';

const INITIAL_STATE = {
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
    case SIGN_OUT: {
      return { ...state, token: null, error: null };
    }

    default:
      return state;
  }
};

export default userReducer;
