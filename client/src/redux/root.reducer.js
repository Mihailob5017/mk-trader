import { combineReducers } from 'redux';

//  Reducers
import userReducer from './user/user.reducer';

export default combineReducers({ user: userReducer });
