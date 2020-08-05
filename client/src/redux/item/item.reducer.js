import {
  GET_ITEMS_START,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILURE,
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
  UPDATE_IVC_START,
  UPDATE_IVC_SUCCESS,
  UPDATE_IVC_FAILURE,
} from "../types";
import { appendScoredList } from "../../helpers/helper-functions";
const INITIAL_STATE = {
  store: null,
  scored: null,
  error: null,
  shouldUpdate: false,
  item: null,
};

const itemReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_ITEMS_START:
      return state;
    case GET_ITEMS_SUCCESS:
      return { ...state, store: action.payload, error: null };

    case GET_ITEMS_FAILURE:
      return { ...state, store: null, error: action.payload };

    case GET_SCORED_ITEMS_START:
      return state;

    case GET_SCORED_ITEMS_SUCCESS:
      return { ...state, scored: action.payload, error: null };

    case GET_SCORED_ITEMS_FAILURE:
      return { ...state, error: action.payload, scored: null };

    case UPDATE_SCORED_ITEMS:
      return {
        ...state,
        scored: appendScoredList(state.scored, action.payload),
      };

    case SEARCH_ITEMS_START:
      return state;

    case SEARCH_ITEMS_SUCCESS:
      return { ...state, store: action.payload, error: null };

    case SEARCH_ITEMS_FAILURE:
      return { ...state, error: action.payload, store: null };

    case SEARCH_AND_FILTER_START:
      return state;

    case SEARCH_AND_FILTER_SUCCESS:
      return { ...state, store: action.payload, error: null };

    case SEARCH_AND_FILTER_FAILURE:
      return { ...state, error: action.payload, store: null };

    case CLEAN_UP_ITEMS: {
      return {
        ...state,
        scored: null,
        store: null,
        error: null,
        shouldUpdate: false,
      };
    }
    case SET_IF_UPDATED: {
      return { ...state, shouldUpdate: true };
    }
    case GET_ITEM: {
      return { ...state, item: action.payload };
    }
    case UPDATE_IVC_START: {
      return state;
    }
    case UPDATE_IVC_SUCCESS: {
      return state;
    }
    case UPDATE_IVC_FAILURE: {
      return { ...state, error: action.payload };
    }

    default: {
      return state;
    }
  }
};

export default itemReducer;
