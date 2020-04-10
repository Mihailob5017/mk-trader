import { combineReducers } from 'redux';

//  Reducers
import userReducer from './user/user.reducer';
import itemReducer from './item/item.reducer';

export default combineReducers({ user: userReducer, items: itemReducer });
