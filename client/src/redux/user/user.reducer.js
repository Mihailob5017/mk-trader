import { GET_TOKEN_FROM_STORAGE } from '../types';

const INITIAL_STATE = {
  token: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_TOKEN_FROM_STORAGE: {
      return { ...state, token: action.payload };
    }

    default:
      return state;
  }
};  

export default userReducer;
