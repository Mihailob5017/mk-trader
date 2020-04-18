import {
  GET_ITEMS_START,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILURE,
  GET_SCORED_ITEMS_START,
  GET_SCORED_ITEMS_SUCCESS,
  GET_SCORED_ITEMS_FAILURE,
  UPDATE_SCORED_ITEMS,
  CLEAN_UP_ITEMS,
} from '../types';
import { appendScoredList } from '../../helpers/helpers';
const INITIAL_STATE = {
  store: null,
  scored: null,
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
    case GET_SCORED_ITEMS_START: {
      return state;
    }

    case GET_SCORED_ITEMS_SUCCESS: {
      return { ...state, scored: action.payload, error: null };
    }
    case GET_SCORED_ITEMS_FAILURE: {
      return { ...state, error: action.payload, scored: null };
    }

    case UPDATE_SCORED_ITEMS: {
      return {
        ...state,
        scored: appendScoredList(state.scored, action.payload),
      };
    }
    case CLEAN_UP_ITEMS: {
      return { ...state, scored: null, store: null, error: null };
    }

    default: {
      return state;
    }
  }
};

export default itemReducer;
